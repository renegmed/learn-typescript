import { Marker } from './Marker';

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(public divId: string) {  
        
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });

    }

    public addMarker(marker: Marker): void {
        marker.mark(this.googleMap);
    }
   
}