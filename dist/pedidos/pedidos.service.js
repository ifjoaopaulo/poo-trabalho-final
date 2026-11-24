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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("./pedido.entity");
const typeorm_2 = require("@nestjs/typeorm");
const clientes_contract_1 = require("../clientes/clientes.contract");
const produtos_contract_1 = require("../produtos/produtos.contract");
let PedidosService = class PedidosService {
    pedidoRepositorio;
    clienteContrato;
    produtoContrato;
    constructor(pedidoRepositorio, clienteContrato, produtoContrato) {
        this.pedidoRepositorio = pedidoRepositorio;
        this.clienteContrato = clienteContrato;
        this.produtoContrato = produtoContrato;
    }
    async criar(dto) {
        if (!(await this.clienteContrato.existe(dto.idCliente))) {
            throw new common_1.NotFoundException(`Cliente de id ${dto.idCliente} não existe.`);
        }
        const listaProdutos = dto.itens.map((item) => item.idProduto);
        const produtosExistentes = await this.produtoContrato.listarExistentes(listaProdutos);
        const produtosMap = new Map(produtosExistentes.map((obj) => [obj.id, obj]));
        const listaInexistentes = listaProdutos.filter((id) => !produtosMap.has(id));
        if (listaInexistentes.length > 0) {
            throw new common_1.NotFoundException(`Itens de id(s) ${listaInexistentes.join(", ")} não existem.`);
        }
        const itens = [];
        let valor = 0;
        for (const i of dto.itens) {
            const produto = produtosMap.get(i.idProduto);
            const preco = Number(Number(produto.preco).toFixed(2));
            itens.push({
                produto: produto,
                quantidade: i.quantidade,
                precoUnitario: preco,
            });
            valor += preco * i.quantidade;
        }
        const pedido = {
            cliente: { id: dto.idCliente },
            itens,
            valor: Number(valor.toFixed(2)),
        };
        return await this.pedidoRepositorio.save(pedido);
    }
    async listar() {
        return await this.pedidoRepositorio.find();
    }
    async buscarPorCliente(id) {
        const resultado = await this.pedidoRepositorio.find({
            where: { cliente: { id } },
        });
        return resultado;
    }
    async buscarPorProduto(id) {
        const filtro = await this.pedidoRepositorio.find({
            select: { id: true },
            where: { itens: { produto: { id } } },
        });
        const listaIds = filtro.map((pedido) => pedido.id);
        if (listaIds.length === 0) {
            return [];
        }
        const resultado = await this.pedidoRepositorio.find({
            where: { id: (0, typeorm_1.In)(listaIds) },
            relations: { itens: true },
        });
        return resultado;
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(pedido_entity_1.Pedido)),
    __param(1, (0, common_1.Inject)(clientes_contract_1.CLIENTE_CONTRACT)),
    __param(2, (0, common_1.Inject)(produtos_contract_1.PRODUTOS_CONTRACT)),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object, Object])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map