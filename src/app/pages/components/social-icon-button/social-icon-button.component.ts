import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon-button',
  templateUrl: './social-icon-button.component.html',
  styleUrls: ['./social-icon-button.component.css'],
})
export class SocialIconButtonComponent {
  @Input() icon = '';
  @Input() link = '';
  @Input() iconColor = 'var(--white)';
}
