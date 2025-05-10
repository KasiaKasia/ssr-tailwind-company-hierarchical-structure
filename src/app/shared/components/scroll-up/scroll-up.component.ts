import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.css'
})
export class ScrollUpComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
