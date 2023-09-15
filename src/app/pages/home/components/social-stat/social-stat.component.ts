import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-stat',
  templateUrl: './social-stat.component.html',
  styleUrls: ['./social-stat.component.css'],
})
export class SocialStatComponent implements OnInit {
  @Input() icon = '';
  @Input() followers = 0;
  followersFormatterd = '';
  @Input() link = '';

  numberFormat(number: number) {
    return new Intl.NumberFormat('en-US').format(number);
  }

  ngOnInit() {
    this.followersFormatterd = this.numberFormat(this.followers);
  }
}
