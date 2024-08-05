import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Message } from '@modules/chat/domain/message.model';

@Component({
  selector: 'app-start-of-the-day',
  standalone: true,
  imports: [CommonModule],
  template: `
    @let areCreationDaysDifferent = first() || (previous().createdAt| date: 'd') !== (message().createdAt | date: 'd');
    @if ( areCreationDaysDifferent ) {
    <div class="-mx-6 my-3 flex items-center justify-center">
      <div class="flex-auto border-b"></div>
      <div class="text-secondary mx-4 flex-0 text-sm font-medium leading-5">
        {{ message().createdAt | date : 'longDate' }}
      </div>
      <div class="flex-auto border-b"></div>
    </div>
    }
  `,
})
export class StartOfTheDayComponent {
  public readonly message = input.required<Message>();
  public readonly previous = input.required<Message>();
  public readonly first = input.required<boolean>();
}
