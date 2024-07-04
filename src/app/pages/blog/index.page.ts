import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import PostAttributes from 'src/app/post-attributes';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="px-4">
      <h1>Posts</h1>
      @for (post of posts; track post.attributes.slug) {
      <a routerLink="/blog/{{ post.attributes.slug }}">
        <h2>{{ post.attributes.title }}</h2>
        <p>{{ post.attributes.description }}</p>
      </a>
      }
    </div>
  `,
})
export default class IndexPage {
  readonly posts = injectContentFiles<PostAttributes>();
}
