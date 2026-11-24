import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/produto.entity';
import { Cliente } from './clientes/cliente.entity';
import { Pedido } from './pedidos/pedido.entity';
import { ItemPedido } from './pedidos/itemPedido.entity';
import { opcoesBanco } from './banco';

@Module({
  imports: [TypeOrmModule.forRoot(opcoesBanco), ProdutosModule, ClientesModule, PedidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
