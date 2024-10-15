import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverViewComponent } from '@app/views/shared';
import { Connect4 } from '@app/connect4';

@Component({
  selector: 'app-start-view',
  standalone: true,
  imports: [CommonModule, CoverViewComponent],
  templateUrl: './start-view.component.html',
})
export class StartViewComponent {
  public readonly connect4 = input.required<Connect4>();
}
