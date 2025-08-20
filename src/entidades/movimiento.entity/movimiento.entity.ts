import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Inventario } from "../inventario.entity/inventario.entity";
import { TipoMovimiento } from "../tipo_movimiento.entity/tipo_movimiento.entity";

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

    @ManyToOne(() => TipoMovimiento, (tipo_movimiento) => tipo_movimiento.nombre)
    tipo_movimiento : TipoMovimiento
}
