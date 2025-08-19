import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Inventario } from "../inventario/inventario";

@Entity()
export class Movimiento {
    @PrimaryGeneratedColumn()
    id : number

    @Column('integer')
    cantidad : number

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @ManyToOne(() => Inventario, (inventario) => inventario.id)
    inventario : Inventario
}
