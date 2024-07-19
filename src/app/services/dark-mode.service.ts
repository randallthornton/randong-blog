import {
  afterNextRender,
  effect,
  inject,
  Injectable,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  _darkMode = signal(false);
  public darkMode = this._darkMode.asReadonly();

  constructor() {
    afterNextRender(() => {
      // Check if dark mode is enabled in storage
      let darkMode = localStorage.getItem('darkMode');
      if (darkMode == null) {
        // Check system preferences
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          darkMode = 'true';
        }

        // Save dark mode to storage
        localStorage.setItem('darkMode', darkMode || 'false');
      }

      this._darkMode.set(darkMode === 'true');
    });

    effect(() => {
      if (document) {
        if (this._darkMode()) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }

        localStorage.setItem('darkMode', this._darkMode() ? 'true' : 'false');
      }
    });
  }

  toggleDarkMode() {
    this._darkMode.set(!this._darkMode());
  }
}
