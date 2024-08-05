import { Injectable, inject } from '@angular/core';
import { BaseSubscriber } from '../base.subscriber';
import { ToastService } from '../../services/toast.service';
import { LoaderStore } from '../../store/loader/loader.store';
import {
  RequestStartedEvent,
  RequestSuccessfulEvent,
  RequestFailedEvent,
} from '../../../domain/event/request/request.event';

@Injectable({ providedIn: 'root' })
export class RequestSubscriber extends BaseSubscriber {
  private readonly loaderStore = inject(LoaderStore);

  constructor(private readonly toastService: ToastService) {
    super();
  }

  protected initSubscriber() {
    this.bus.on(RequestStartedEvent).subscribe(({ message }) => {
      this.toastService.wait(message);
      this.loaderStore.activate();
    });

    this.bus.on(RequestSuccessfulEvent).subscribe(({ message }) => {
      this.finish();
      this.toastService.success(message);
    });

    this.bus.on(RequestFailedEvent).subscribe(({ error }) => {
      this.finish();
      this.toastService.error(error.message);
    });
  }

  private finish() {
    this.toastService.dismissWait();
    this.loaderStore.deactivate();
  }
}
