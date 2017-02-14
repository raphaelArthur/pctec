export class Person
{
    name: string;
    phone: number;
    email: string;
    mananger: number;

    constructor(public theName, public thePhone, public theMail, public theMananger)
    {
        this.name = theName;
        this.phone = thePhone;
        this.email = theMail;
        this.mananger = theMananger;
    }
}