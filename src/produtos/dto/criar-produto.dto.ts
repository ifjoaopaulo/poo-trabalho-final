import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CriarProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  @IsString()
  descricao: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  preco: number;
}
