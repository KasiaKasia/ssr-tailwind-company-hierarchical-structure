import { Component } from '@angular/core';
import { ButtonComponent, UiActionType } from '../../shared/components/button/button.component';
import { ImgComponent } from '../../shared/components/img/img.component';

@Component({
  selector: 'app-navbar-wcag',
  standalone: true,
  imports: [ButtonComponent, ImgComponent],
  templateUrl: './navbar-wcag.component.html',
  styleUrl: './navbar-wcag.component.css'
})
export class NavbarWcagComponent {
  UiActionType = UiActionType;
}
