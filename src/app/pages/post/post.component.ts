import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/data/posts';
import { PostCardData } from '../home/components/post-card/post-card.component';
import { Location } from '@angular/common';

interface SinglePostData extends PostCardData {}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  private slugId = '';
  postData: SinglePostData = { img: '' };

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.slugId = params['id']));
    this.postData = this.getPostData();
  }

  getPostData() {
    return posts.filter((value) => value.slugId === this.slugId)[0];
  }

  goBack() {
    this.location.back();
  }
}
