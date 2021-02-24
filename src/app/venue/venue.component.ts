import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { VenueService } from '../venue.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  public venues: Venue[] = [];
  public markers = [];
  public selectedVenue: Venue | null = null;

  constructor(private venueService: VenueService) { }

  ngOnInit(): void {
    this.getVenues();
  }

  getVenues(): void {
    this.venueService.getVenues()
        .subscribe(venues => this.venues = venues);
  }

  getExcludedAreaLatLng(): google.maps.LatLng {
    return this.venueService.getExcludedAreaLatLng();
  }

  getMapOptions(): object {
    return this.venueService.getMapOptions();
  }

  getVenueUrl(venue: Venue): string {
    return 'http://www.google.com/maps/place/' + venue.location.lat + ',' + venue.location.lng;
  }

  getVenueAddress(venue: Venue): string {
    if(venue.location.formattedAddress) {
      return venue.location.formattedAddress.join(', ');
    } else if(venue.location.address) {
      return venue.location.address;
    }

    return '';
  }

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  openInfo(marker: MapMarker, venue: Venue) {
    this.selectedVenue = venue;
    this.info.open(marker);
  }
}