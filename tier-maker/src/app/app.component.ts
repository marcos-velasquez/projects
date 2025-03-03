import { Component } from '@angular/core';
import { NgxSonnerToaster } from 'ngx-sonner';
import { TierMakerComponent } from './presenter/views/tier-maker.component';

@Component({
  imports: [NgxSonnerToaster, TierMakerComponent],
  selector: 'app-root',
  template: '<app-tier-maker />   <ngx-sonner-toaster richColors/>',
})
export class AppComponent {
  title = 'tier-maker';
}
