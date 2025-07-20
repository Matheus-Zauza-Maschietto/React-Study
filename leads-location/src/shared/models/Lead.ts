

export default class Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;

    constructor(id: string, name: string, email: string, phone: string, address: string, city: string, state: string, country: string, latitude: number, longitude: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}