import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Rol } from "../rol.entity/rol.entity";

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

    @Column('text')
    contraseña : string

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @ManyToOne(() => Rol, (rol) => rol.nombre, { eager: true })
    rol : Rol
}
