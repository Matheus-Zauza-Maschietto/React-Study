

export default class Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    observations: string;

    constructor(id: string, name: string, email: string, phone: string, address: string, neighborhood: string, city: string, state: string, latitude: number, longitude: number, observations: string = '') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.latitude = latitude;
        this.longitude = longitude;
        this.observations = observations;
    }
}