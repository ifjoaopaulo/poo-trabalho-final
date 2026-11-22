import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly service: PedidosService) {}

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
