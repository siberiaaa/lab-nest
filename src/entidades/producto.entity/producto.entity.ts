import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../categoria.entity/categoria.entity";
import { Inventario } from "../inventario.entity/inventario.entity";

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

    @ManyToOne(() => Categoria, (categoria) => categoria.nombre, { eager: true })
    categoria : Categoria

    @OneToOne(() => Inventario, { eager: true })
    @JoinColumn()
    inventario: Inventario
}
