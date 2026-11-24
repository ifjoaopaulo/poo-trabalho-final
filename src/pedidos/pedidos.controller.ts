import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CriarPedidoDto } from './dto/criar-pedido.dto';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly service: PedidosService) { }

  @Post()
  async criar(@Body() body: CriarPedidoDto): Promise<Pedido> {
    return await this.service.criar(body);
  }

  @Get()
  async listar(): Promise<Pedido[]> {
    return await this.service.listar();
  }

  @Get('clientes/:id')
  async buscarPorCliente(@Param('id', ParseIntPipe) id: number): Promise<Pedido[]> {
    return await this.service.buscarPorCliente(id);
  }

  @Get('produtos/:id')
  async buscarPorProduto(@Param('id', ParseIntPipe) id: number): Promise<Pedido[]> {
    return await this.service.buscarPorProduto(id);
  }
}
