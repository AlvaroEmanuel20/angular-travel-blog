import { Component, Input } from '@angular/core';
import { TopPostData } from '../top-post-card/top-post-card.component';

interface PostCardData extends TopPostData {
  createdAt?: string;
  description?: string;
  img: string;
  imgAlt?: string;
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() imgWidth = '100%';
  @Input() imgHeight = '260px';

  @Input() postData: PostCardData = {
    img: ''
  };
}
