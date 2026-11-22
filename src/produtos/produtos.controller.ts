import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly service: ProdutosService) {}

  @Post()
  criar(@Body() body: any) {
    return this.service.criar(body);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.service.buscar(Number(id));
  }

  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() body: any) {
    return this.service.atualizar(Number(id), body);
  }
}
