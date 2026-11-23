import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @Column({ type: 'varchar', length: 100 })
  nome: string;
}
