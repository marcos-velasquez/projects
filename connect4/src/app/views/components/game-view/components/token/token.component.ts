import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connect4 } from '@app/connect4';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token.component.html',
})
export class TokenComponent {
  public readonly connect4 = input.required<Connect4>();
  public readonly column = input.required<number>();
  public readonly row = input.required<number>();
}
