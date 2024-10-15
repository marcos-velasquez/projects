import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connect4 } from '@app/connect4';

@Component({
  selector: 'app-turn-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turn-color.component.html',
})
export class TurnColorComponent {
  public readonly connect4 = input.required<Connect4>();
}
