import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CriarProdutoDto } from './dto/criar-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly service: ProdutosService) { }

  @Post()
  criar(@Body() body: CriarProdutoDto) {
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

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.service.remover(id);
  }
}
