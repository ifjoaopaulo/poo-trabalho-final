import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutosService {
  private lista: Produto[] = [];
  private id = 1;

  criar(dto: CriarProdutoDto): Produto {
    const item = { id: this.id++, ...dto } as Produto;
    this.lista.push(item);
    return item;
  }

  listar(): Produto[] {
    return this.lista;
  }

  buscar(id: number): Produto {
    const item = this.lista.find((p) => p.id === id);
    if (!item) throw new NotFoundException('Não encontrado');
    return item;
  }

  remover(id: number): void {
    this.buscar(id);
    this.lista = this.lista.filter((p) => p.id !== id);
  }
}
