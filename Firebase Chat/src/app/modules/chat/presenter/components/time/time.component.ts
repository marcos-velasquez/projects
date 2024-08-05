import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Message } from '@modules/chat/domain/message.model';
import { IsMinePipe } from '../../pipes/isMine.pipe';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, IsMinePipe],
  template: ` @let isMine = message() | isMine; @if ( first() || last() || (next() | isMine) !== isMine ||
    (next()).createdAt !== message().createdAt ) {
    <div class="text-secondary my-0.5 text-sm font-medium" [ngClass]="{ 'mr-3': isMine, 'ml-3': !isMine }">
      {{ message().createdAt | date : 'HH:mm' }}
    </div>
    }`,
})
export class TimeComponent {
  public readonly message = input.required<Message>();
  public readonly next = input.required<Message>();
  public readonly first = input.required<boolean>();
  public readonly last = input.required<boolean>();
}
