import { Produto } from "./produtos/produto.entity";
import { Cliente } from "./clientes/cliente.entity";
import { Pedido } from "./pedidos/pedido.entity";
import { ItemPedido } from "./pedidos/itemPedido.entity";
import { DataSourceOptions } from "typeorm";

export const opcoesBanco: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "pizzaria",
  entities: [Produto, Cliente, Pedido, ItemPedido],
  synchronize: true,
};
