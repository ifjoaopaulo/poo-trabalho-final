import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  private lista: Cliente[] = [];
  private id = 1;

  create(dto: CreateClienteDto): Cliente {
    const item = { id: this.id++, ...dto } as Cliente;
    this.lista.push(item);
    return item;
  }

  findAll(): Cliente[] {
    return this.lista;
  }

  findOne(id: number): Cliente {
    const item = this.lista.find((c) => c.id === id);
    if (!item) throw new NotFoundException('Não encontrado');
    return item;
  }

  remove(id: number): void {
    this.findOne(id);
    this.lista = this.lista.filter((c) => c.id !== id);
  }
}
