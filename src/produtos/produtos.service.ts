import { Injectable, NotFoundException } from "@nestjs/common";
import { CriarProdutoDto } from "./dto/criar-produto.dto";
import { Produto } from "./produto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, In } from "typeorm";
import { ProdutosContract } from "./produtos.contract";

@Injectable()
export class ProdutosService implements ProdutosContract {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepositorio: Repository<Produto>,
  ) {}

  async criar(dto: CriarProdutoDto): Promise<Produto> {
    const produto = this.produtoRepositorio.create(dto);
    return this.produtoRepositorio.save(produto);
  }

  async listar(): Promise<Produto[]> {
    return this.produtoRepositorio.find();
  }

  async buscar(id: number): Promise<Produto> {
    const resultado = await this.produtoRepositorio.findOneBy({ id });

    if (resultado === null) {
      throw new NotFoundException(`Produto de id ${id} não existe.`);
    }

    return resultado;
  }

  async remover(id: number): Promise<Produto> {
    const removido = await this.buscar(id);
    await this.produtoRepositorio.softDelete(id);
    return removido;
  }

  async existe(idProduto: number): Promise<boolean> {
    const produto = await this.produtoRepositorio.findOneBy({ id: idProduto });

    return produto !== null;
  }

  async listarExistentes(ids: number[]): Promise<Produto[]> {
    if (ids.length === 0) {
      return [];
    }
    const lista = await this.produtoRepositorio.find({
      where: { id: In(ids) },
    });

    return lista;
  }
}
