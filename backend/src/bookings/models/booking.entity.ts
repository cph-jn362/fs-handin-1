import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BookingEntity{
    @PrimaryGeneratedColumn()
    bookingID: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    comment: string;

}