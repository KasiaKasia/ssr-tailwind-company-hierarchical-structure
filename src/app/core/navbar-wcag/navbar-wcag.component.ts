import { Component, inject } from '@angular/core';
import { FontSizeService } from '../../store/ui/services/font-size.service';

@Component({
  selector: 'app-navbar-wcag',
  standalone: true,
  templateUrl: './navbar-wcag.component.html',
  styleUrl: './navbar-wcag.component.css'
})
export class NavbarWcagComponent {
  protected fontSize = inject(FontSizeService)

  setFontSizeWCAG(size: number) {
    this.fontSize.setFontSize(size);
  }
}
