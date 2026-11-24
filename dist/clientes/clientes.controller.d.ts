import { ClientesService } from "./clientes.service";
import { CriarClienteDto } from "./dto/criar-cliente.dto";
export declare class ClientesController {
    private readonly service;
    constructor(service: ClientesService);
    criar(body: CriarClienteDto): Promise<import("./cliente.entity").Cliente>;
    listar(): Promise<import("./cliente.entity").Cliente[]>;
    buscar(id: number): Promise<import("./cliente.entity").Cliente>;
    remover(id: number): Promise<import("./cliente.entity").Cliente>;
}
