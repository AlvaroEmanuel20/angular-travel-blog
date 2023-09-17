import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  constructor(private location: Location, private navigator: Router) {}

  goBackHome() {
    this.navigator.navigate(['/']);
  }

  goBack() {
    this.location.back();
  }
}
