import { Injectable } from '@angular/core';
import { Venue } from './venue';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  public venues: Venue[] = [];
  private venuesUrl: string = 'https://api.foursquare.com/v2/venues/search' +
  '?near=Tartu,EE' +
  '&categoryId=4bf58dd8d48988d16c941735' +
  '&client_id=DNZSC40YZSJSCKLYZYSO3ZKN10003EO0YTHKLAUJTBF2PSBG' +
  '&client_secret=AZ5PESADIOG4TC0U0LLA5CH4GMXKRZ14VS4UTAHMUQYZTPC4' +
  '&v=20210221';

  constructor(
    private http: HttpClient
  ) { }

  async getVenuesInit(): Promise<void> {
     await this.http.get(this.venuesUrl)
                    .toPromise()
                    .then((res: any) => {
                      this.venues = res.response.venues;
                    });
  }

  getVenues(): Observable<Venue[]> {
    return of(this.venues);
  }
}
