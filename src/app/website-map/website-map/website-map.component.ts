import { Component } from '@angular/core';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';

@Component({
  selector: 'app-website-map',
  imports: [RouterLinkComponent],
  templateUrl: './website-map.component.html',
  styleUrl: './website-map.component.css'
})
export class WebsiteMapComponent {
  protected showSubmenu = false;
}
