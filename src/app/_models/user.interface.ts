export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suit: string;
    zipcode: number;
    geo: Geo;
}
export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


