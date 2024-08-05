import { Injectable } from '@angular/core';
import { BaseSubscriber } from './base.subscriber';
import { UseCaseSubscriber } from './usecase/usecase.subscriber';
import { RequestSubscriber } from './request/request.subscriber';

@Injectable({ providedIn: 'root' })
export class AppSubscriber extends BaseSubscriber {
  constructor(
    private readonly useCaseSubscriber: UseCaseSubscriber,
    private readonly requestSubscriber: RequestSubscriber
  ) {
    super();
  }

  protected initSubscriber() {
    this.useCaseSubscriber.init();
    this.requestSubscriber.init();
  }
}
