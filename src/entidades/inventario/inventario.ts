import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Inventario {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column('text', { unique: true })
    nombreIdentificador : string

    @Column('integer')
    cantidadActual : number

    @Column('integer', { nullable: true })
    maximo : number

    @Column('integer', { unique: true })
    minimo : number

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;
}
