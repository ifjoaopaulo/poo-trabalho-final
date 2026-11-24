import { Pedido } from "./pedido.entity";
import { Produto } from "../produtos/produto.entity";
export declare class ItemPedido {
    id: number;
    pedido: Pedido;
    produto: Produto;
    quantidade: number;
    precoUnitario: number;
}
