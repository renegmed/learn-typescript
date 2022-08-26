import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
 

    public mark(googleMap: google.maps.Map): void {
        new google.maps.Marker({
            map: googleMap,
            position: {
                lat: parseFloat(faker.address.latitude()),
                lng: parseFloat(faker.address.longitude())
            }
        }); 
    }
}