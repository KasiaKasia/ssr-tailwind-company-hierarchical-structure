import { Component } from '@angular/core';
import { ScrollUpComponent } from '../../shared/components/scroll-up/scroll-up.component';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollUpComponent, RouterLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
