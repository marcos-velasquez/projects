import { Injectable } from '@angular/core';
import { BaseSubscriber } from '../base.subscriber';
import { ToastService } from '../../services/toast.service';
import { UseCaseFailedEvent, UseCaseSuccessfulEvent } from '../../../domain';

@Injectable({ providedIn: 'root' })
export class UseCaseSubscriber extends BaseSubscriber {
  constructor(private readonly toastService: ToastService) {
    super();
  }

  protected initSubscriber(): void {
    this.bus.on(UseCaseFailedEvent).subscribe(({ message }) => this.toastService.error(message));
    this.bus.on(UseCaseSuccessfulEvent).subscribe(({ message }) => this.toastService.success(message));
  }
}
