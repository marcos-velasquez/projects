import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from '@shared/components/autocomplete/autocomplete.component';
import {
  LocationService,
  LocationStore,
} from '@modules/location/data/services';

@Component({
  selector: 'wh-location-finder',
  templateUrl: './location-finder.component.html',
  standalone: true,
  imports: [CommonModule, AutocompleteComponent],
})
export class LocationFinderComponent {
  constructor(
    public locationService: LocationService,
    public locationStore: LocationStore
  ) {}
}
