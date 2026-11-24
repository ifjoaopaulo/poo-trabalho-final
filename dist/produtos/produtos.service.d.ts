import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';
import { ProdutosContract } from './produtos.contract';
export declare class ProdutosService implements ProdutosContract {
    private readonly produtoRepositorio;
    constructor(produtoRepositorio: Repository<Produto>);
    criar(dto: CriarProdutoDto): Promise<Produto>;
    listar(): Promise<Produto[]>;
    buscar(id: number): Promise<Produto>;
    remover(id: number): Promise<Produto>;
    existe(idProduto: number): Promise<boolean>;
    listarExistentes(ids: number[]): Promise<Produto[]>;
}
