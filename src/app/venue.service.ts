import { Injectable } from '@angular/core';
import { Venue } from './venue';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private venues: Venue[] = [];
  private venuesUrl: string = 'https://api.foursquare.com/v2/venues/search' +
  '?near=Tartu,EE' +
  '&categoryId=4bf58dd8d48988d16c941735' +
  '&client_id=DNZSC40YZSJSCKLYZYSO3ZKN10003EO0YTHKLAUJTBF2PSBG' +
  '&client_secret=AZ5PESADIOG4TC0U0LLA5CH4GMXKRZ14VS4UTAHMUQYZTPC4' +
  '&v=20210221';
  private excludedAreaLatLng = new google.maps.LatLng(58.37809353636114, 26.731951240812602);

  constructor(
    private http: HttpClient
  ) { }

  async getVenuesInit(): Promise<void> {
    const that = this;
    await this.http.get(this.venuesUrl)
                  .toPromise()
                  .then((res: any) => {
                    let venues = res.response.venues;
                    const filteredVenues = venues.filter(function(venue: Venue) {
                      const venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
                      const distance = google.maps.geometry.spherical.computeDistanceBetween(venueLatLng, that.excludedAreaLatLng);

                      if(distance > 1000) {
                        return venue;
                      }

                      return false;
                    });

                    this.venues = filteredVenues;
                  });
  }

  getVenues(): Observable<Venue[]> {
    return of(this.venues);
  }

  getExcludedAreaLatLng(): google.maps.LatLng {
    return this.excludedAreaLatLng;
  }
}
