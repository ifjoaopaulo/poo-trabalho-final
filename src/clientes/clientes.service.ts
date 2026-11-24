import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { Cliente } from './cliente.entity';
import { ClienteContract } from './clientes.contract';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService implements ClienteContract {
  constructor(
    @InjectRepository(Cliente) private readonly clienteRepositorio: Repository<Cliente>,
  ) { };

  async criar(dto: CriarClienteDto): Promise<Cliente> {
    const cliente = this.clienteRepositorio.create(dto);
    return await this.clienteRepositorio.save(cliente);
  }

  async listar(): Promise<Cliente[]> {
    return await this.clienteRepositorio.find();
  }

  async buscar(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepositorio.findOneBy({ id });

    if (cliente === null) {
      throw new NotFoundException(`Cliente de id ${id} não existe.`);
    }

    return cliente;
  }

  async remover(id: number): Promise<Cliente> {
    const removido = this.buscar(id);
    this.clienteRepositorio.softDelete(id); // softDelete(id) não apaga a linha, só marca ele com uma "data de deletado" e passa a ignorá-lo
    return removido;
  }

  async existe(idCliente: number): Promise<boolean> {
    const cliente = await this.clienteRepositorio.findOneBy({ id: idCliente })

    return cliente !== null;
  }
}
