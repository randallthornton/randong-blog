import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export const RouteMetadata = {};

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>index page works!!</p>
    <router-outlet></router-outlet>
  `,
})
export default class IndexPage {}
