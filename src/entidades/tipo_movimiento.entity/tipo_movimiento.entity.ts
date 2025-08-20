import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Movimiento } from "../movimiento.entity/movimiento.entity";

@Entity()
export class TipoMovimiento {
    @PrimaryColumn('text')
    nombre : string

    @Column('text')
    descripcion : string

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @OneToMany(() => Movimiento, (movimiento) => movimiento.id)
    movimientos : Movimiento[]
}
