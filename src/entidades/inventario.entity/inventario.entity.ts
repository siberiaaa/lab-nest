import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Movimiento } from "../movimiento.entity/movimiento.entity";

@Entity()
export class Inventario {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column('text', { unique: true })
    nombreIdentificador : string

    @Column('integer')
    cantidadActual : number

    // Creo que no debería furular ya que categoría nos da esta información ya
    // @Column('integer', { nullable: true })
    // maximo : number

    // @Column('integer', { unique: true })
    // minimo : number

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @OneToMany(() => Movimiento, (movimiento) => movimiento.id)
    movimientos : Movimiento[]
}
