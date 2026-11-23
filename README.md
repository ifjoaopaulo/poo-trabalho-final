# Projeto Final de Programação Orientada a Objetos (POO)
Feito em dupla por João Paulo Bastos dos Santos e Pedro Lucas

# Simulador de E-commerce de Pizzaria
API desenvolvida em NestJS, usada para gravar pedidos detalhados (com dados do cliente e produto) em um banco de dados PostgreSQL.

## Como rodar

``` bash
# (A definir)
```

## Testes

``` bash
# (A definir)
```

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

## Requisitos (dados pelo professor)

- A API deve ter pelo menos 3 módulos, separados por domínio. Cada módulo representa uma parte do negócio, por exemplo clientes, produtos e pedidos.
- Cada módulo deve ter pelo menos 4 rotas.
- Entre as rotas de cada módulo deve haver pelo menos uma rota GET e pelo menos uma rota com outro método: POST, PUT, PATCH ou DELETE.
- Os dados devem ser gravados no PostgreSQL.
- O projeto deve ter um script de seed em src/seed.ts, que preenche o banco com dados de exemplo dos 3 módulos. Ele deve rodar com o comando:
``` bash
npx ts-node src/seed.ts
```
