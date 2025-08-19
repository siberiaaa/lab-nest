import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../categoria/categoria";
import { Inventario } from "../inventario/inventario";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id : number

    @Column('text')
    nombre : string

    @Column('boolean')
    disponible : boolean

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.nombre)
    categoria : Categoria

    @OneToOne(() => Inventario)
    @JoinColumn()
    inventario: Inventario
}
