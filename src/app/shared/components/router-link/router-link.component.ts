import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-router-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './router-link.component.html',
  styleUrl: './router-link.component.css'
})
export class RouterLinkComponent {
  readonly routerPath = input('')
  readonly routerLinkTitle = input('')
  readonly cssClass = input('')
  readonly cssClassActive = input('')
}
