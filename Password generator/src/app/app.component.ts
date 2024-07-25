import { Component } from '@angular/core';
import { PasswordGeneratorComponent } from './modules/password-generator/presenter/password-generator.component';

@Component({
  standalone: true,
  imports: [PasswordGeneratorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Password generator';
}
