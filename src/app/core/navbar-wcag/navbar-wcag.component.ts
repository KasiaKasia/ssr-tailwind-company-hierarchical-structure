import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ImgComponent } from '../../shared/components/img/img.component';
import { FontSize, UIActionType } from '../settings-wcag/settings-wcag';

@Component({
  selector: 'app-navbar-wcag',
  standalone: true,
  imports: [ButtonComponent, ImgComponent],
  templateUrl: './navbar-wcag.component.html',
  styleUrl: './navbar-wcag.component.css'
})
export class NavbarWcagComponent {
  UiActionType = UIActionType;
  FontSize = FontSize; 
}
