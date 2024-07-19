import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-sidenav-container fullscreen>
      <mat-sidenav [mode]="sidenavMode()" #sidenav>
        <div class="flex flex-col justify-center">
          <img src="icon.svg" alt="Logo" class="w-full" />
          <mat-nav-list class="mt-4">
            <a mat-list-item routerLink="/blog" (click)="sidenav.close()"
              >Blog</a
            >
            <a mat-list-item routerLink="/about" (click)="sidenav.close()"
              >About</a
            >
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar class="flex gap-4 primary-toolbar">
          <button
            mat-icon-button
            color="primary"
            (click)="sidenav.toggle()"
            aria-label="Toggle sidenav"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <div>Randong</div>

          <div class="flex-1"></div>
          <button mat-icon-button color="primary" (click)="toggleDarkMode()">
            <mat-icon>{{ isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      @use '@angular/material' as mat;

      $theme: .primary-toolbar {
        @include mat.toolbar-color($primary);
      }
    `,
  ],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [DarkModeService],
})
export class AppComponent {
  sidenavMode = signal<MatDrawerMode>('over');
  isDarkMode = this.darkMode.darkMode;

  constructor(
    breakpointObserver: BreakpointObserver,
    private darkMode: DarkModeService
  ) {
    breakpointObserver
      .observe([Breakpoints.Medium])
      .pipe(
        tap((result) => {
          result.matches
            ? this.sidenavMode.set('side')
            : this.sidenavMode.set('over');
        })
      )
      .subscribe();
  }

  toggleDarkMode() {
    this.darkMode.toggleDarkMode();
  }
}
