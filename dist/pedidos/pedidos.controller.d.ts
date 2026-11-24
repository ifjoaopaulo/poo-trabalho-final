import { PedidosService } from "./pedidos.service";
import { CriarPedidoDto } from "./dto/criar-pedido.dto";
import { Pedido } from "./pedido.entity";
export declare class PedidosController {
    private readonly service;
    constructor(service: PedidosService);
    criar(body: CriarPedidoDto): Promise<Pedido>;
    listar(): Promise<Pedido[]>;
    buscarPorCliente(id: number): Promise<Pedido[]>;
    buscarPorProduto(id: number): Promise<Pedido[]>;
}
