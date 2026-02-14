import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    /**
     * @todo - Set to true starting v6
     * As `eventCoalescing` is enabled by default for NEW projects starting v18,
     * there is a possibility CCA may run into issues - most components should work OOB
     */
    provideZoneChangeDetection({ eventCoalescing: false }),
    provideRouter(routes)
  ]
};
