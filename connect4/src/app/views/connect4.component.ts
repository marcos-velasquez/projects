import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connect4 } from '../connect4';
import { StartViewComponent } from './components/start-view/start-view.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';

@Component({
  selector: 'app-connect4',
  standalone: true,
  imports: [CommonModule, StartViewComponent, GameViewComponent, ResumeViewComponent],
  templateUrl: './connect4.component.html',
})
export class Connect4Component {
  public readonly connect4: Connect4;

  constructor() {
    this.connect4 = new Connect4();
  }
}
