import { Component, inject, input } from '@angular/core';
import { WcagService } from '../../../store/ui/services/wcag/wcag.service';
import { UIActionType } from '../../../core/settings-wcag/settings-wcag';


@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  protected wcagService = inject(WcagService)

  readonly actionType = input<UIActionType>()
  readonly value = input<number>(19);
  readonly buttonTitle = input<string>('')
  readonly ariaLabel = input<string>('')

  onClick(): void {

    switch (this.actionType()) {
      case UIActionType.FontSize:
        this.wcagService.setFontSize(this.value());
        break;
      case UIActionType.LineHeight:
        this.wcagService.setLineHeight();
        break;
      case UIActionType.LetterSpacing:
        this.wcagService.setLetterSpacing();
        break;
      case UIActionType.Color:
        this.wcagService.setColor();
        break;
      case UIActionType.ReadPage:
        this.wcagService.readPage();
        break;
      case UIActionType.PausePage:
        this.wcagService.pauseReading();
        break;
      case UIActionType.ResumePage:
        this.wcagService.resumeReading();
        break;
      case UIActionType.StopPage:
        this.wcagService.stopReading();
        break;
      default:
        console.warn('Nieznana akcja:', this.actionType());
    }
  }
}
