import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CriarClienteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(11, { message: 'O CPF deve ter 11 digitos (somente números).' })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caractéres.' })
  nome: string;
}
