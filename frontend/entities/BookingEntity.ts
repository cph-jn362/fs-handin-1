export class BookingEntity{
    bookingID?: number
    firstName: string
    lastName: string
    phone: string
    email: string
    comment: string

    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        comment: string,
        bookingID?: number,

    ){  
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.comment = comment;
        this.bookingID = bookingID;
    }
}