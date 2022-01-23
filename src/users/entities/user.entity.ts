import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 @Entity({ name: 'user' })
 
export class UserEntity {
 @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
 id: number;

 @Column({ name: 'name', type: 'varchar'})
 name: string;

 @Column({ name: 'age', type: 'int' })
 age: number;

 @Column({ name: 'gender', type: 'varchar'})
 gender: string;

}

