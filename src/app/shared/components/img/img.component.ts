import { Component, input } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {
  readonly src = input<string>('')
  readonly alt = input<string>('')
}
