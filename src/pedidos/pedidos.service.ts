import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  private lista: Pedido[] = [];
  private id = 1;

  create(dto: CreatePedidoDto): Pedido {
    const item = { id: this.id++, ...dto } as Pedido;
    this.lista.push(item);
    return item;
  }

  findAll(): Pedido[] {
    return this.lista;
  }

  findOne(id: number): Pedido {
    const item = this.lista.find((p) => p.id === id);
    if (!item) throw new NotFoundException('Não encontrado');
    return item;
  }

  remove(id: number): void {
    this.findOne(id);
    this.lista = this.lista.filter((p) => p.id !== id);
  }
}
