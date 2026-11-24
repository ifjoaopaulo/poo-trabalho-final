import { Repository } from "typeorm";
import { CriarPedidoDto } from "./dto/criar-pedido.dto";
import { Pedido } from "./pedido.entity";
import { type ClienteContract } from "../clientes/clientes.contract";
import { type ProdutosContract } from "../produtos/produtos.contract";
export declare class PedidosService {
    private readonly pedidoRepositorio;
    private readonly clienteContrato;
    private readonly produtoContrato;
    constructor(pedidoRepositorio: Repository<Pedido>, clienteContrato: ClienteContract, produtoContrato: ProdutosContract);
    criar(dto: CriarPedidoDto): Promise<Pedido>;
    listar(): Promise<Pedido[]>;
    buscarPorCliente(id: number): Promise<Pedido[]>;
    buscarPorProduto(id: number): Promise<Pedido[]>;
}
