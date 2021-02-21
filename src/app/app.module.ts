import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { VenueService } from './venue.service';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: venueProviderFactory,
      deps: [VenueService],
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function venueProviderFactory(provider: VenueService) {
  return () => provider.getVenuesInit();
}
