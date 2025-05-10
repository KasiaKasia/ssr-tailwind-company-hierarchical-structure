import { Component } from '@angular/core';
import { ScrollUpComponent } from '../../shared/components/scroll-up/scroll-up.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollUpComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
