import { Component, inject, input } from '@angular/core';
import { WcagService } from '../../../store/ui/services/wcag/wcag.service';

export enum UiActionType {
  FontSize = 'fontSize',
  LineHeight = 'lineHeight',
  LetterSpacing = 'letterSpacing',
  Color = 'color'
}

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  protected wcagService = inject(WcagService)

  readonly actionType = input<UiActionType>()
  readonly value = input<number>(19);
  readonly buttonTitle = input<string>('')
  readonly ariaLabel = input<string>('')

  onClick(): void {

    switch (this.actionType()) {
      case UiActionType.FontSize:
        this.wcagService.setFontSize(this.value());
        break;
      case UiActionType.LineHeight:
        this.wcagService.setLineHeight();
        break;
      case UiActionType.LetterSpacing:
        this.wcagService.setLetterSpacing();
        break;
      case UiActionType.Color:
        this.wcagService.setColor();
        break;
      default:
        console.warn('Nieznana akcja:', this.actionType());
    }
  }
}
