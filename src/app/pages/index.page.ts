import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `<div class="mx-4 grid grid-cols-1 gap-4">
    <h1>Home</h1>
    <div class="grid grid-cols-2 gap-4">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Card Content</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>Click</button>
        </mat-card-actions>
      </mat-card>

      <mat-card color="primary">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Card Content</p>
        </mat-card-content>
        <mat-card-actions>
          <button color="primary" mat-button>Click</button>
        </mat-card-actions>
      </mat-card>

      <mat-card color="accent">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Card Content</p>
        </mat-card-content>
        <mat-card-actions>
          <button color="accent" mat-button>Click</button>
        </mat-card-actions>
      </mat-card>

      <mat-card color="tertiary">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Card Content</p>
        </mat-card-content>
        <mat-card-actions>
          <button color="tertiary" mat-button>Click</button>
        </mat-card-actions>
      </mat-card>
    </div>
  </div> `,
})
export default class IndexPage {}
