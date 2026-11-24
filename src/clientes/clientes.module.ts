import { Module } from "@nestjs/common";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./cliente.entity";
import { CLIENTE_CONTRACT } from "./clientes.contract";

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [
    ClientesService,
    { provide: CLIENTE_CONTRACT, useExisting: ClientesService },
  ],
  exports: [CLIENTE_CONTRACT],
})
export class ClientesModule {}
