import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-sidenav-container fullscreen matAppBackground>
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
        <mat-toolbar color="primary" class="flex gap-4">
          <button
            mat-icon-button
            (click)="sidenav.toggle()"
            aria-label="Toggle sidenav"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <div>Randong</div>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [``],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
  ],
})
export class AppComponent {
  sidenavMode = signal<MatDrawerMode>('over');

  constructor(breakpointObserver: BreakpointObserver) {
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
}
