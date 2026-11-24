import { Produto } from "./produto.entity";

export interface ProdutosContract {
  existe(idProduto: number): Promise<boolean>;

  listarExistentes(ids: number[]): Promise<Produto[]>;
}

export const PRODUTOS_CONTRACT = Symbol("PRODUTOS_CONTRACT");
