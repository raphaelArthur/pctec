export class Company
{
    id: number;
    name: string;
    ramal: number;
    email: string;
    segment: string;
    employes: number;
    description: string;

    constructor(public id_enum, public companyName, public phone, public mail, public area, public employesTotal, public desc)
    {
        this.id = id_enum;
        this.name = companyName;
        this.ramal = phone;
        this.email = mail;
        this.segment = area;
        this.employes = employesTotal;
        this.description = desc;
    }
}
 