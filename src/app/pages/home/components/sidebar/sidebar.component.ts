import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
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
      slugId: 'post7',
      img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
      imgAlt: 'Desert',
      category: 'Desert',
      title: 'EUA Deserts',
      description: 'Sit in ad do deserunt velit sint aute eu commodo...',
    },
    {
      slugId: 'post7',
      img: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      imgAlt: 'Adventures',
      category: 'Adventures',
      title: 'Mountains',
      description: 'Sit in ad do deserunt velit sint aute eu commodo...',
    },
    {
      slugId: 'post7',
      img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      imgAlt: 'Luxury',
      category: 'Luxury',
      title: 'Dubai Life',
      description: 'Sit in ad do deserunt velit sint aute eu commodo...',
    },
  ];
}
