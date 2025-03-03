import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tierMakerFacade } from 'src/app/application';

@Component({
  selector: 'app-refresh',
  imports: [CommonModule],
  templateUrl: './refresh.component.html',
})
export class RefreshComponent {
  public reset(): void {
    tierMakerFacade.reset();
  }
}
