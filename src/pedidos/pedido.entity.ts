import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Cliente } from "../clientes/cliente.entity";
import { ItemPedido } from "./itemPedido.entity";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Cliente, { nullable: false })
  @JoinColumn({ name: "idCliente" })
  cliente: Cliente;

  @OneToMany(() => ItemPedido, (item) => item.pedido, { cascade: true })
  itens: ItemPedido[];

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
  valor: number;
}
