import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', link: 'https://facebook.com' },
    { icon: 'fa-brands fa-x-twitter', link: 'https://x.com' },
    { icon: 'fa-brands fa-google-plus-g', link: 'https://google.com' },
    { icon: 'fa-brands fa-vimeo-v', link: 'https://vimeo.com' },
    { icon: 'fa-brands fa-youtube', link: 'https://youtube.com' },
  ];

  menu = [
    { label: 'Home', link: '/' },
    { label: 'Adventures', link: '/adventures' },
    { label: 'Travel tips', link: '/travel-tips' },
    { label: 'Destinations', link: '/destinations' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];
}
