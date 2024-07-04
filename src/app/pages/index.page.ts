import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <mat-sidenav-container fullscreen matAppBackground>
      <mat-sidenav #sidenav>
        <mat-nav-list>
          <a mat-list-item href="./hello">Hello</a>
          <a mat-list-item href="./about">About</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            mat-icon-button
            (click)="sidenav.toggle()"
            aria-label="Toggle sidenav"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <span>Analog</span>
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
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
