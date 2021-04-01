export default class User { 
    name!: string;
    password!: string;
    address!: {
        street: string;
        city: string;
    };
    company!: {
        name: string;
        address: string;
    }
}