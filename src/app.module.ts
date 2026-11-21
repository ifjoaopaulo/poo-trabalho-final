import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [ProdutosModule, ClientesModule, PedidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
