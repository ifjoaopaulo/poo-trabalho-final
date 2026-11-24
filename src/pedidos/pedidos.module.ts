import { Module } from "@nestjs/common";
import { PedidosController } from "./pedidos.controller";
import { PedidosService } from "./pedidos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemPedido } from "./itemPedido.entity";
import { Pedido } from "./pedido.entity";
import { ClientesModule } from "src/clientes/clientes.module";
import { ProdutosModule } from "src/produtos/produtos.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, ItemPedido]),
    ClientesModule,
    ProdutosModule,
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
