
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column()
     name: string;

     @Column()
     email: string;

     @Column()
     password: string;

     @CreateDateColumn()
     created_at: Date;


     @UpdateDateColumn()
     updated_at: Date;

     @Column('timestamp with time zone')
     date: Date;

}     //ctrl +d     para selcionar o mesmo nome em varias linhas

export default User;
