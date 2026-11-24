import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produto {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  nome: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  descricao: string;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
  preco: number;
}
