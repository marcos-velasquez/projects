import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from '@app/views/shared';
import { Connect4 } from '@app/connect4';
import { Board } from '@app/models/board.model';
import { TurnColorComponent } from './components/turn-color/turn-color.component';
import { TokenComponent } from './components/token/token.component';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [CommonModule, HeroViewComponent, TurnColorComponent, TokenComponent],
  templateUrl: './game-view.component.html',
})
export class GameViewComponent {
  public ROWS = Board.ROWS;
  public COLUMNS = Board.COLUMNS;
  public readonly connect4 = input.required<Connect4>();
}
