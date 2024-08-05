import { Injectable } from '@angular/core';
import { ExternalToast, toast } from 'ngx-sonner';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly config: ExternalToast = { position: 'bottom-center' };
  private waitId: string | number | undefined = undefined;

  public success(message: string) {
    toast.success(message, this.config);
  }

  public error(message: string) {
    toast.error(message, this.config);
  }

  public wait(message: string) {
    this.waitId = toast.loading(message, { ...this.config, duration: Number.POSITIVE_INFINITY });
  }

  public dismissWait() {
    toast.dismiss(this.waitId);
  }
}
