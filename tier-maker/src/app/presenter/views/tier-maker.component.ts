import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { tierMakerFacade } from '../../application';
import { Element } from '../../domain/element';
import { DownloadComponent, InsertElementComponent, RefreshComponent } from './actions';

@Component({
  selector: 'app-tier-maker',
  standalone: true,
  imports: [FormsModule, DragDropModule, InsertElementComponent, RefreshComponent, DownloadComponent],
  templateUrl: './tier-maker.component.html',
})
export class TierMakerComponent {
  public readonly tierMakerFacade = signal(tierMakerFacade);

  public drop(event: CdkDragDrop<Element[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
