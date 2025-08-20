import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "../producto.entity/producto.entity";

@Entity()
export class Categoria {
    @PrimaryColumn('text')
    nombre : string

    @Column('text')
    descripcion : string

    @Column('integer', { nullable: true })
    minimo : number

    @Column('integer', { nullable: true })
    maximo : number

    @CreateDateColumn()
    registrado: Date;

    @UpdateDateColumn()
    modificado: Date;

    @OneToMany(() => Producto, (producto) => producto.id)
    productos : Producto[]
}
