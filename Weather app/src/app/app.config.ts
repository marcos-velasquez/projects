import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ToastNoAnimationModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(ToastNoAnimationModule.forRoot({ progressBar: true })),
  ],
};
