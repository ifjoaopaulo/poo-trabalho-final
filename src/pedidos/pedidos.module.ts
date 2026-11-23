import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from './itemPedido.entity';
import { Pedido } from './pedido.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Pedido, ItemPedido])],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule { }
