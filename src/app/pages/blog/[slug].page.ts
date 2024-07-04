import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    <div class="px-4">
      @if (post$ | async; as post) {
      <article>
        <img class="max-h-[40vh]" [src]="post.attributes.coverImage" />
        <analog-markdown [content]="post.content" />
      </article>
      }
    </div>
  `,
  styles: [],
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
