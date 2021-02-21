import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  public venues: Venue[] = [];

  constructor(private venueService: VenueService) { }

  ngOnInit(): void {
    this.getVenues();
  }

  getVenues(): void {
    this.venueService.getVenues()
        .subscribe(venues => this.venues = venues);
  }
}