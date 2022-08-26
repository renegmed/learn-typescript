import faker from 'faker';

export class Company{     
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
   
    mark(googleMap: google.maps.Map):void {

        new google.maps.Marker({
            map: googleMap,
            position: {
                lat: parseFloat(faker.address.latitude()),
                lng: parseFloat(faker.address.longitude())
            }
        });
         
    }
};
