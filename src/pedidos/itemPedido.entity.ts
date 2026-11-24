import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Pedido } from "./pedido.entity";
import { Produto } from "../produtos/produto.entity";

@Entity("itens_pedido")
export class ItemPedido {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens, {
    onDelete: "CASCADE",
    nullable: false,
  })
  @JoinColumn({ name: "idPedido" })
  pedido: Pedido;

  @ManyToOne(() => Produto, { nullable: false })
  @JoinColumn({ name: "idProduto" })
  produto: Produto;

  @Column({ type: "integer", nullable: false })
  quantidade: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
  precoUnitario: number;
}
