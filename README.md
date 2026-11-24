# Projeto Final de Programação Orientada a Objetos (POO)
Feito em dupla por João Paulo Bastos dos Santos e Pedro Lucas

# Simulador de E-commerce de Pizzaria
API desenvolvida em NestJS, usada para gravar pedidos detalhados (com dados do cliente e produto) em um banco de dados PostgreSQL.

## Funções

- Produtos
  - Listar todos produtos disponíveis [GET()]
  - Buscar produto por id [GET(':id')]
  - Cadastrar novo produto [POST()]
  - Remover produto por id [DELETE(':id')]

- Clientes
  - Listar todos clientes cadastrados [GET()]
  - Buscar cliente por id [GET(':id')]
  - Cadastrar novo cliente [POST()]
  - Remover cliente por id [DELETE(':id')]
 
- Pedidos
  - Listar todos pedidos [GET()]
  - Buscar pedidos por id do cliente [GET('cliente/:id')]
  - Buscar pedidos por id de um produto [GET('produtos/:id')]
  - Lançar novo pedido [POST()]

## Como rodar

**!!!** Para rodar, você precisa que o PostgreSQL já esteja rodando no seu sistema.

Popule o banco de dados com os dados iniciais de teste:
``` bash
npx ts-node src/seed.ts
```

Inicie a API:
``` bash
npm run start
```

## Testes

### Produtos (/produtos)
``` bash
curl -s http://localhost:3000/produtos
```

``` bash
curl -s http://localhost:3000/produtos/1
```

``` bash
curl -s -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Portuguesa-M","descricao":"Pizza 6 pedaços","preco":62}'
```

``` bash
curl -s -X DELETE http://localhost:3000/produtos/6
```

### Clientes (/clientes)
``` bash
curl -s http://localhost:3000/clientes
```

``` bash
curl -s http://localhost:3000/clientes/1
```

``` bash
curl -s -X POST http://localhost:3000/clientes \
  -H "Content-Type: application/json" \
  -d '{"cpf":"11122233344","nome":"Ana Clara"}'
```

``` bash
curl -s -X DELETE http://localhost:3000/clientes/4
```

### Pedidos (/pedidos)
``` bash
curl -s -X POST http://localhost:3000/pedidos \
  -H "Content-Type: application/json" \
  -d '{"idCliente":3,"itens":[{"idProduto":1,"quantidade":1},{"idProduto":4,"quantidade":2}]}'
```

``` bash
curl -s http://localhost:3000/pedidos
```

``` bash
curl -s http://localhost:3000/pedidos/clientes/1
```

``` bash
curl -s http://localhost:3000/pedidos/produtos/2
```

## Requisitos (dados pelo professor)

- A API deve ter pelo menos 3 módulos, separados por domínio. Cada módulo representa uma parte do negócio, por exemplo clientes, produtos e pedidos.
- Cada módulo deve ter pelo menos 4 rotas.
- Entre as rotas de cada módulo deve haver pelo menos uma rota GET e pelo menos uma rota com outro método: POST, PUT, PATCH ou DELETE.
- Os dados devem ser gravados no PostgreSQL.
- O projeto deve ter um script de seed em src/seed.ts, que preenche o banco com dados de exemplo dos 3 módulos. Ele deve rodar com o comando:
``` bash
npx ts-node src/seed.ts
```
