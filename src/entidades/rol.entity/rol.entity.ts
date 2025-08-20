import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from "../usuario.entity/usuario.entity";

@Entity()
export class Rol {
    @PrimaryColumn('text')
    nombre : string

    @Column('text', { nullable: true })
    descripcion : string

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;

    @OneToMany(() => Usuario, (usuario) => usuario.correo)
    usuarios : Usuario[]
}
