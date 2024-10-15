import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from '../hero-view/hero-view.component';

@Component({
  selector: 'app-cover-view',
  standalone: true,
  imports: [CommonModule, HeroViewComponent],
  templateUrl: './cover-view.component.html',
})
export class CoverViewComponent {}
