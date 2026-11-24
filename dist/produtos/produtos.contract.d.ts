import { Produto } from "./produto.entity";
export interface ProdutosContract {
    existe(idProduto: number): Promise<boolean>;
    listarExistentes(ids: number[]): Promise<Produto[]>;
}
export declare const PRODUTOS_CONTRACT: unique symbol;
