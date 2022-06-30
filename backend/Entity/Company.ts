import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    CIN: string

}
export default Company