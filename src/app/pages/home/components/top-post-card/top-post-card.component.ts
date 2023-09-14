import { Component, Input } from '@angular/core';

export type TopPostData = {
  slugId?: string;
  title?: string;
  author?: string;
  category?: string;
};

@Component({
  selector: 'app-top-post-card',
  templateUrl: './top-post-card.component.html',
  styleUrls: ['./top-post-card.component.css'],
})
export class TopPostCardComponent {
  @Input() bgImage = '';
  @Input() padding = '20px';
  @Input() categoryTop = '25px';

  @Input() postData: TopPostData = {};
}
