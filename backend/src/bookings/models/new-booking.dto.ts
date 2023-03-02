export class NewBookingDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: string;
    readonly email: string;
    readonly comment: string;
   
    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        comment: string,
    ){
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this.comment = comment

    }
}