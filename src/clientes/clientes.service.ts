import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  private lista: Cliente[] = [];
  private id = 1;

  criar(dto: CriarClienteDto): Cliente {
    const item = { id: this.id++, ...dto } as Cliente;
    this.lista.push(item);
    return item;
  }

  listar(): Cliente[] {
    return this.lista;
  }

  buscar(id: number): Cliente {
    const item = this.lista.find((c) => c.id === id);
    if (!item) throw new NotFoundException('Não encontrado');
    return item;
  }

  remover(id: number): void {
    this.buscar(id);
    this.lista = this.lista.filter((c) => c.id !== id);
  }
}
