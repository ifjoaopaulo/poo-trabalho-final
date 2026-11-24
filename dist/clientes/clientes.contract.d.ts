export interface ClienteContract {
    existe(idCliente: number): Promise<boolean>;
}
export declare const CLIENTE_CONTRACT: unique symbol;
