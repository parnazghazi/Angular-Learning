export interface User {
    id: number;
    name: string;
    age: number;
    address: Address;
    phone: string;
    company: Company;
    email: string;
    website: string;
}

export interface Address {
    street: string;
    suit: string;
    zipcode: number;
    geo: Geo;
}
export interface Geo{
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


