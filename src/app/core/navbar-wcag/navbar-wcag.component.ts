import { Component, inject } from '@angular/core';
import { WcagService } from '../../store/ui/services/wcag/wcag.service';

@Component({
  selector: 'app-navbar-wcag',
  standalone: true,
  templateUrl: './navbar-wcag.component.html',
  styleUrl: './navbar-wcag.component.css'
})
export class NavbarWcagComponent {
  protected wcagService = inject(WcagService)

  setFontSizeWCAG(size: number) {
    this.wcagService.setFontSize(size);
  }
  setColorWCAG() {
    this.wcagService.setColor();
  }
}
