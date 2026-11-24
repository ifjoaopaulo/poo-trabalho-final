import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumberString,
} from "class-validator";

export class CriarClienteDto {
  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(11, { message: "O CPF deve ter 11 digitos (somente números)." })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: "O nome deve ter no máximo 100 caractéres." })
  nome: string;
}
