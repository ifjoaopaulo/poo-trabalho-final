import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository, In, DeepPartial } from "typeorm";
import { CriarPedidoDto } from "./dto/criar-pedido.dto";
import { Pedido } from "./pedido.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {
  type ClienteContract,
  CLIENTE_CONTRACT,
} from "src/clientes/clientes.contract";
import {
  type ProdutosContract,
  PRODUTOS_CONTRACT,
} from "src/produtos/produtos.contract";
import { ItemPedido } from "./itemPedido.entity";

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepositorio: Repository<Pedido>,
    @Inject(CLIENTE_CONTRACT) private readonly clienteContrato: ClienteContract,
    @Inject(PRODUTOS_CONTRACT)
    private readonly produtoContrato: ProdutosContract,
  ) {}

  async criar(dto: CriarPedidoDto): Promise<Pedido> {
    if (!(await this.clienteContrato.existe(dto.idCliente))) {
      throw new NotFoundException(`Cliente de id ${dto.idCliente} não existe.`);
    }

    const listaProdutos = dto.itens.map((item) => item.idProduto);
    const produtosExistentes =
      await this.produtoContrato.listarExistentes(listaProdutos);

    const produtosMap = new Map(produtosExistentes.map((obj) => [obj.id, obj]));

    const listaInexistentes = listaProdutos.filter(
      (id) => !produtosMap.has(id),
    );
    if (listaInexistentes.length > 0) {
      throw new NotFoundException(
        `Itens de id(s) ${listaInexistentes.join(", ")} não existem.`,
      );
    }

    const itens: DeepPartial<ItemPedido>[] = [];
    let valor: number = 0;
    for (const i of dto.itens) {
      const produto = produtosMap.get(i.idProduto);
      const preco = Number(Number(produto!.preco).toFixed(2));

      itens.push({
        produto: produto,
        quantidade: i.quantidade,
        precoUnitario: preco,
      });

      valor += preco * i.quantidade;
    }

    const pedido: DeepPartial<Pedido> = {
      cliente: { id: dto.idCliente },
      itens,
      valor: Number(valor.toFixed(2)),
    };
    return await this.pedidoRepositorio.save(pedido);
  }

  async listar(): Promise<Pedido[]> {
    return await this.pedidoRepositorio.find();
  }

  async buscarPorCliente(id: number): Promise<Pedido[]> {
    const resultado = await this.pedidoRepositorio.find({
      where: { cliente: { id } },
    });

    return resultado;
  }

  async buscarPorProduto(id: number): Promise<Pedido[]> {
    const filtro = await this.pedidoRepositorio.find({
      select: { id: true },
      where: { itens: { produto: { id } } },
    });

    const listaIds = filtro.map((pedido) => pedido.id);
    if (listaIds.length === 0) {
      return [];
    }

    const resultado = await this.pedidoRepositorio.find({
      where: { id: In(listaIds) },
      relations: { itens: true },
    });

    return resultado;
  }
}
