import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <img
      [src]="post.attributes.coverImage"
      [className]="post.attributes.coverImageClassName"
    />
    <div class="px-4">
      <article>
        <analog-markdown [content]="post.content" />
      </article>
    </div>
    }
  `,
  styles: [],
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
