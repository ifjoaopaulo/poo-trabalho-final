import { ProdutosService } from "./produtos.service";
import { CriarProdutoDto } from "./dto/criar-produto.dto";
export declare class ProdutosController {
    private readonly service;
    constructor(service: ProdutosService);
    criar(body: CriarProdutoDto): Promise<import("./produto.entity").Produto>;
    listar(): Promise<import("./produto.entity").Produto[]>;
    buscar(id: string): Promise<import("./produto.entity").Produto>;
    remover(id: number): Promise<import("./produto.entity").Produto>;
}
