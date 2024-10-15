import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ChatSubscriber } from '../infrastructure/chat.subscriber';
import { ChatStore } from '../infrastructure/chat.store';
import { ChatFacade } from '../application';
import { IsMinePipe } from './pipes/isMine.pipe';
import { StartOfTheDayComponent } from './components/start-of-the-day/start-of-the-day.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { TimeComponent } from './components/time/time.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextFieldModule,
    IsMinePipe,
    StartOfTheDayComponent,
    BubbleComponent,
    TimeComponent,
  ],
  styles: `:host { display: block; height: 100%; position: relative; }`,
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  zz;
  public readonly store = inject(ChatStore);
  public readonly value = new FormControl('', [Validators.required]);

  constructor(private readonly chatFacade: ChatFacade) {
    inject(ChatSubscriber).init();
  }

  public send() {
    if (this.value.invalid || this.value.getRawValue()?.trim() === '') return;
    this.chatFacade.send(this.value.getRawValue() as string).then(() => this.value.reset());
  }
}
