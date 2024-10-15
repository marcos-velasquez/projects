import { Component } from '@angular/core';
import { Connect4Component } from './views/connect4.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Connect4Component],
})
export class AppComponent {
  title = 'connect4';
}
