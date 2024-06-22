import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideContent, withHighlighter, withMarkdownRenderer } from '@analogjs/content';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimations(),
    provideContent(withMarkdownRenderer()),
  ],
};
