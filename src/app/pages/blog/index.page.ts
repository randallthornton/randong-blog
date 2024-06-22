import { Component } from '@angular/core';

export const RouteMetadata = {};

@Component({
  standalone: true,
  imports: [],
  template: `
    <p>index page works!!</p>
    <routerOutlet></routerOutlet>
  `,
})
export default class IndexPage {}
