import { CriarClienteDto } from "./dto/criar-cliente.dto";
import { Cliente } from "./cliente.entity";
import { ClienteContract } from "./clientes.contract";
import { Repository } from "typeorm";
export declare class ClientesService implements ClienteContract {
    private readonly clienteRepositorio;
    constructor(clienteRepositorio: Repository<Cliente>);
    criar(dto: CriarClienteDto): Promise<Cliente>;
    listar(): Promise<Cliente[]>;
    buscar(id: number): Promise<Cliente>;
    remover(id: number): Promise<Cliente>;
    existe(idCliente: number): Promise<boolean>;
}
