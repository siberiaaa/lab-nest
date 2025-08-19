import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Rol } from "../rol/rol";

@Entity()
export class Usuario {
    @PrimaryColumn('text')
    correo : string

    @Column('text', { unique: true })
    nombre_usuario : string

    @Column('text')
    nombres : string

    @Column('text')
    apellidos : string

    @Column('date')
    nacimiento : string

    @Column('text')
    genero : string

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @ManyToOne(() => Rol, (rol) => rol.nombre)
    rol : Rol
}
