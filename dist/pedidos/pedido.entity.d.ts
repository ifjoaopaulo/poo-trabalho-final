import { Cliente } from "../clientes/cliente.entity";
import { ItemPedido } from "./itemPedido.entity";
export declare class Pedido {
    id: number;
    cliente: Cliente;
    itens: ItemPedido[];
    valor: number;
}
