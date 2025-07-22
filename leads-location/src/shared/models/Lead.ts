

export default class Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    neighborhood: string;
    cityId: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    observations: string;
    initialDate: Date;

    constructor(
        id: string, name: string, email: string, 
        phone: string, address: string, neighborhood: string, 
        city: string, cityId: number, state: string, 
        latitude: number, longitude: number, observations: string = '', zipCode: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.neighborhood = neighborhood;
        this.city = city;
        this.cityId = cityId;
        this.state = state;
        this.latitude = latitude;
        this.longitude = longitude;
        this.observations = observations;
        this.zipCode = zipCode;
        this.initialDate = new Date();
    }
}