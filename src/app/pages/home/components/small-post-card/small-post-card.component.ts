import { Component, Input } from '@angular/core';
import { PostCardData } from '../post-card/post-card.component';

interface SmallCardData extends PostCardData {}

@Component({
  selector: 'app-small-post-card',
  templateUrl: './small-post-card.component.html',
  styleUrls: ['./small-post-card.component.css'],
})
export class SmallPostCardComponent {
  @Input() postData: SmallCardData = { img: '' };
}
