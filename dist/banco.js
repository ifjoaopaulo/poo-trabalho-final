"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcoesBanco = void 0;
const produto_entity_1 = require("./produtos/produto.entity");
const cliente_entity_1 = require("./clientes/cliente.entity");
const pedido_entity_1 = require("./pedidos/pedido.entity");
const itemPedido_entity_1 = require("./pedidos/itemPedido.entity");
exports.opcoesBanco = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "pizzaria",
    entities: [produto_entity_1.Produto, cliente_entity_1.Cliente, pedido_entity_1.Pedido, itemPedido_entity_1.ItemPedido],
    synchronize: true,
};
//# sourceMappingURL=banco.js.map