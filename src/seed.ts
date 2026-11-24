import { DataSource } from "typeorm";
import { opcoesBanco } from "./banco";
import { Produto } from "./produtos/produto.entity";
import { Cliente } from "./clientes/cliente.entity";
import { ItemPedido } from "./pedidos/itemPedido.entity";
import { Pedido } from "./pedidos/pedido.entity";

async function criarBanco() {
  const servidor = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
  });
  await servidor.initialize();
  await servidor.createQueryRunner().createDatabase("pizzaria", true);
  await servidor.destroy();

  const banco = new DataSource(opcoesBanco);
  await banco.initialize();

  const repositorioProduto = banco.getRepository(Produto);
  if ((await repositorioProduto.count()) > 0) {
    console.log("A tabela produtos já tem dados");
  } else {
    await repositorioProduto.save([
      { nome: "Marguerita-F", descricao: "Pizza 8 pedaços", preco: 80 },
      { nome: "Calabresa-G", descricao: "Pizza 6 pedaços", preco: 67 },
      { nome: "Coca-cola 2L", descricao: "Refrigerante 2L", preco: 12 },
      { nome: "Sprite 1.5L", descricao: "Refrigerante 1.5L", preco: 10 },
      { nome: "Pepperoni-P", descricao: "Pizza 4 pedaços", preco: 54 },
    ]);
    console.log("5 produtos cadastrados");
  }

  const repositorioCliente = banco.getRepository(Cliente);
  if ((await repositorioCliente.count()) > 0) {
    console.log("A tabela clientes já tem dados");
  } else {
    await repositorioCliente.save([
      { cpf: "12345678910", nome: "Fulano Dital" },
      { cpf: "01987654321", nome: "Maria Aparecida" },
      { cpf: "40028922123", nome: "José Sanstos" },
    ]);
    console.log("3 clientes cadastrados");
  }

  const repositorioPedido = banco.getRepository(Pedido);
  const repositorioItem = banco.getRepository(ItemPedido);

  if ((await repositorioPedido.count()) > 0) {
    console.log("A tabela pedidos já tem dados");
  } else {
    const pedidosSalvos = await repositorioPedido.save([
      { cliente: { id: 1 }, valor: 0 },
      { cliente: { id: 2 }, valor: 0 },
    ]);
    console.log("2 pedidos cadastrados");

    if ((await repositorioItem.count()) === 0) {
      const produto1 = await repositorioProduto.findOneBy({ id: 1 });
      const produto2 = await repositorioProduto.findOneBy({ id: 2 });
      const produto3 = await repositorioProduto.findOneBy({ id: 3 });
      const produto4 = await repositorioProduto.findOneBy({ id: 4 });

      const itensPedido1 = [
        {
          pedido: { id: pedidosSalvos[0].id },
          produto: { id: 1 },
          quantidade: 1,
          precoUnitario: produto1!.preco,
        },
        {
          pedido: { id: 1 },
          produto: { id: 3 },
          quantidade: 2,
          precoUnitario: produto3!.preco,
        },
      ];

      const itensPedido2 = [
        {
          pedido: { id: pedidosSalvos[1].id },
          produto: { id: 2 },
          quantidade: 2,
          precoUnitario: produto2!.preco,
        },
        {
          pedido: { id: 2 },
          produto: { id: 4 },
          quantidade: 3,
          precoUnitario: produto4!.preco,
        },
      ];

      await repositorioItem.save([...itensPedido1, ...itensPedido2]);
      console.log("4 itens cadastrados");

      const valorPedido1 = itensPedido1.reduce(
        (acc, item) => acc + Number(item.precoUnitario) * item.quantidade,
        0,
      );
      const valorPedido2 = itensPedido2.reduce(
        (acc, item) => acc + Number(item.precoUnitario) * item.quantidade,
        0,
      );

      await repositorioPedido.update(pedidosSalvos[0].id, {
        valor: valorPedido1,
      });
      await repositorioPedido.update(pedidosSalvos[1].id, {
        valor: valorPedido2,
      });
    }
  }
  await banco.destroy();
}

criarBanco();
