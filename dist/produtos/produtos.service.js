"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const produto_entity_1 = require("./produto.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProdutosService = class ProdutosService {
    produtoRepositorio;
    constructor(produtoRepositorio) {
        this.produtoRepositorio = produtoRepositorio;
    }
    async criar(dto) {
        const produto = this.produtoRepositorio.create(dto);
        return this.produtoRepositorio.save(produto);
    }
    async listar() {
        return this.produtoRepositorio.find();
    }
    async buscar(id) {
        const resultado = await this.produtoRepositorio.findOneBy({ id });
        if (resultado === null) {
            throw new common_1.NotFoundException(`Produto de id ${id} não existe.`);
        }
        return resultado;
    }
    async remover(id) {
        const removido = await this.buscar(id);
        await this.produtoRepositorio.softDelete(id);
        return removido;
    }
    async existe(idProduto) {
        const produto = await this.produtoRepositorio.findOneBy({ id: idProduto });
        return produto !== null;
    }
    async listarExistentes(ids) {
        if (ids.length === 0) {
            return [];
        }
        const lista = await this.produtoRepositorio.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        return lista;
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map