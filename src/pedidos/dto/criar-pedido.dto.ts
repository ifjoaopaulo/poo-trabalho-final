import { Type } from "class-transformer";
import { IsInt, Min, IsArray, ArrayNotEmpty, ValidateNested, ArrayUnique } from "class-validator";
import { CriarItemPedidoDto } from "./criar-item-pedido.dto";

export class CriarPedidoDto {
  @IsInt()
  @Min(1)
  idCliente: number;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @ValidateNested({ each: true })
  @Type(() => CriarItemPedidoDto)
  itens: CriarItemPedidoDto[]
}
