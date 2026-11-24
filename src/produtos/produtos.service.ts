import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  private lista: Produto[] = [];
  private id = 1;

  create(dto: CreateProdutoDto): Produto {
    const item = { id: this.id++, ...dto } as Produto;
    this.lista.push(item);
    return item;
  }

  findAll(): Produto[] {
    return this.lista;
  }

  findOne(id: number): Produto {
    const item = this.lista.find((p) => p.id === id);
    if (!item) throw new NotFoundException('Não encontrado');
    return item;
  }

  remove(id: number): void {
    this.findOne(id);
    this.lista = this.lista.filter((p) => p.id !== id);
  }
}
