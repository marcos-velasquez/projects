import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Message } from '@modules/chat/domain/message.model';
import { IsMinePipe } from '../../pipes/isMine.pipe';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule, IsMinePipe],
  template: `
    @let isMine = message() | isMine;
    <div
      class="relative max-w-3/4 rounded-lg px-3 py-2"
      [ngClass]="{ 'bg-blue-500 text-blue-50': isMine, 'bg-gray-500 text-gray-50': !isMine }"
    >
      @if ( last() || (next() | isMine) !== isMine ) {
      <div
        class="absolute bottom-0 w-3 mb-px"
        [ngClass]="{ '-right-1 -mr-px text-blue-500': isMine, '-left-1 -ml-px -scale-x-1 text-gray-500': !isMine }"
      >
        <ng-container *ngTemplateOutlet="speechBubbleExtension"></ng-container>
      </div>
      }

      <div class="min-w-4 leading-5" [innerHTML]="message().value"></div>
      @if(!isMine){
      <span class="text-sm font-semibold text-neutral-content">{{ message().user.email }}</span>
      }
    </div>

    <ng-template #speechBubbleExtension>
      <svg width="100%" height="100%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path
            d="M1.01522827,0.516204834 C-8.83532715,54.3062744 61.7609863,70.5215302 64.8009949,64.3061218 C68.8074951,54.8859711 30.1663208,52.9997559 37.5036011,0.516204834 L1.01522827,0.516204834 Z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    </ng-template>
  `,
})
export class BubbleComponent {
  public readonly message = input.required<Message>();
  public readonly next = input.required<Message>();
  public readonly last = input.required<boolean>();
}
