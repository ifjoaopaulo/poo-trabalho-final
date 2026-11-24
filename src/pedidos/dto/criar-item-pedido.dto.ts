import { IsInt, Min } from "class-validator";

export class CriarItemPedidoDto {
  @IsInt()
  @Min(1)
  idProduto: number;

  @IsInt()
  @Min(1)
  quantidade: number;
}
