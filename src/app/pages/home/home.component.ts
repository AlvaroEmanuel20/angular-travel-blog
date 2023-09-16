import { Component } from '@angular/core';
import { posts } from 'src/app/data/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  topPosts = [
    {
      id: posts[0].slugId,
      img: `url(${posts[0].img})`,
      title: posts[0].title,
      category: posts[0].category,
      categoryTop: '25px',
      padding: '40px',
    },
    {
      id: posts[1].slugId,
      img: `url(${posts[1].img})`,
      title: posts[1].title,
      category: posts[1].category,
      categoryTop: '20px',
      padding: '20px',
    },
    {
      id: posts[2].slugId,
      img: `url(${posts[2].img})`,
      title: posts[2].title,
      category: posts[2].category,
      categoryTop: '20px',
      padding: '20px',
    },
  ];

  postCards = [
    {
      id: posts[3].slugId,
      img: posts[3].img,
      imgAlt: posts[3].title,
      imgHeight: '260px',
      title: posts[3].title,
      category: posts[3].category,
      description: posts[3].description,
      createdAt: posts[3].createdAt,
    },
    {
      id: posts[4].slugId,
      img: posts[4].img,
      imgAlt: posts[4].title,
      imgHeight: '260px',
      title: posts[4].title,
      category: posts[4].category,
      description: posts[4].description,
      createdAt: posts[4].createdAt,
    },
    {
      id: posts[5].slugId,
      img: posts[5].img,
      imgAlt: posts[5].title,
      imgHeight: '350px',
      title: posts[5].title,
      category: posts[5].category,
      description: posts[5].description,
      createdAt: posts[5].createdAt,
    },
  ];
}
