import { Module } from "@nestjs/common";
import { ProdutosController } from "./produtos.controller";
import { ProdutosService } from "./produtos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./produto.entity";
import { PRODUTOS_CONTRACT } from "./produtos.contract";

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [
    ProdutosService,
    { provide: PRODUTOS_CONTRACT, useExisting: ProdutosService },
  ],
  exports: [PRODUTOS_CONTRACT],
})
export class ProdutosModule {}
