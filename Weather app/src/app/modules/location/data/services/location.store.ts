import { Injectable, inject, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '../models/location.model';

@Injectable({ providedIn: 'root' })
export class LocationStore {
  private toastService = inject(ToastrService);
  public readonly location = signal<Location | null>(null);

  constructor() {
    Location.createFormCurrentPosition()
      .then((location) => this.location.set(location))
      .catch((error) => this.toastService.error(error.message));
  }

  public setLocation(location: Location) {
    this.location.set(location);
  }
}
