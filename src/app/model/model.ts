export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    lng: number;
}

export interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}