import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverViewComponent } from '@app/views/shared';
import { Connect4 } from '@app/connect4';

@Component({
  selector: 'app-resume-view',
  standalone: true,
  imports: [CommonModule, CoverViewComponent],
  templateUrl: './resume-view.component.html',
})
export class ResumeViewComponent {
  public readonly connect4 = input.required<Connect4>();
}
