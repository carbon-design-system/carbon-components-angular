import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  /**
   * As `eventCoalescing` is enabled by default for NEW projects starting v18,
   * there is a possibility CCA may run into issues - most components should work OOB
   */
  providers: [provideZoneChangeDetection({ eventCoalescing: false }), provideRouter(routes)]
};
