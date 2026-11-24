import { Body, Controller, Get, Param, Delete, Post, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CriarClienteDto } from './dto/criar-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) { }

  @Post()
  criar(@Body() body: CriarClienteDto) {
    return this.service.criar(body);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscar(@Param('id', ParseIntPipe) id: number) {
    return this.service.buscar(id);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.service.remover(id);
  }
}
