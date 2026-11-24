export interface ClienteContract {
  existe(idCliente: number): Promise<boolean>;
}

export const CLIENTE_CONTRACT = Symbol('CLIENTE_CONTRACT')
