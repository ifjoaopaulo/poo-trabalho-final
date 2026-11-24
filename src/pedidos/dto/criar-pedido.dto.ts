import { Type } from "class-transformer";
import { IsInt, Min, IsArray, ArrayNotEmpty, ValidateNested } from "class-validator";
import { CriarItemPedidoDto } from "./criar-item-pedido.dto";

export class CriarPedidoDto {
  @IsInt()
  @Min(1)
  idCliente: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CriarItemPedidoDto)
  itens: CriarItemPedidoDto[]
}
