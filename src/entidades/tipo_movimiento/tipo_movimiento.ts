import { Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export class TipoMovimiento {
    @PrimaryColumn('text')
    nombre : string

    @Column('text')
    descripcion : string

    @CreateDateColumn()
    registrado: Date;
    
    @UpdateDateColumn()
    modificado: Date;
}
