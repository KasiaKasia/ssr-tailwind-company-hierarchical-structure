import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkComponent } from '../../shared/components/router-link/router-link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
