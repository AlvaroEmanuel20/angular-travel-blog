import { Component, Input } from '@angular/core';
import { posts } from 'src/app/data/posts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() showNews = true;

  socialStats = [
    {
      icon: 'fa-brands fa-facebook-f',
      followers: 1200,
      link: 'https://facebook.com',
    },
    { icon: 'fa-brands fa-x-twitter', followers: 87890, link: 'https://x.com' },
    {
      icon: 'fa-brands fa-google-plus-g',
      followers: 8920,
      link: 'https://google.com',
    },
    {
      icon: 'fa-brands fa-vimeo-v',
      followers: 15600,
      link: 'https://vimeo.com',
    },
    {
      icon: 'fa-brands fa-youtube',
      followers: 17341,
      link: 'https://youtube.com',
    },
  ];

  smallCards = [
    {
      slugId: posts[6].slugId,
      img: posts[6].img,
      imgAlt: posts[6].title,
      category: posts[6].category,
      title: posts[6].title,
      description: posts[6].description,
    },
    {
      slugId: posts[7].slugId,
      img: posts[7].img,
      imgAlt: posts[7].title,
      category: posts[7].category,
      title: posts[7].title,
      description: posts[7].description,
    },
    {
      slugId: posts[8].slugId,
      img: posts[8].img,
      imgAlt: posts[8].title,
      category: posts[8].category,
      title: posts[8].title,
      description: posts[8].description,
    },
  ];
}
