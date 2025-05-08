import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setColor, setFontSize, setLetterSpacing, setLineHeight } from '../../actions/ui.actions';
import { DOCUMENT } from '@angular/common';
import { WcagStoreService } from '../wcag-store/wcag-store.service';
import { COLOR_WHITE, COLOR_YELLOW, LETTER_SPACING_MAX, LETTER_SPACING_MIN, LINE_HEIGHT_MAX, LINE_HEIGHT_MIN } from '../../../../core/settings-wcag/settings-wcag';

@Injectable({
  providedIn: 'root'
})
export class WcagService {
  private document = inject(DOCUMENT);
  private store = inject(Store);
  private getUISettingsWCAG = inject(WcagStoreService).getUISettingsWCAG();

  setFontSize(size: number) {
    this.store.dispatch(setFontSize({ fontSize: size }));
  }

  setColor() {
    const getColor = getComputedStyle(this.document.body).getPropertyValue('--main-color').trim();
    const changeColor = getColor === COLOR_YELLOW ? COLOR_WHITE : COLOR_YELLOW;
    this.store.dispatch(setColor({ color: changeColor }));
  }

  setLineHeight() {
    const getLineHeight = getComputedStyle(this.document.body).getPropertyValue('--main-line-height').trim();
    const changeLineHeight = getLineHeight === LINE_HEIGHT_MIN ? LINE_HEIGHT_MAX : LINE_HEIGHT_MIN;
    this.store.dispatch(setLineHeight({ lineHeight: changeLineHeight }));
  }

  setLetterSpacing() {
    const getLetterSpacing = getComputedStyle(this.document.body).getPropertyValue('--main-letter-spacing');
    const changeLetterSpacing = getLetterSpacing === LETTER_SPACING_MIN ? LETTER_SPACING_MAX : LETTER_SPACING_MIN;
    this.store.dispatch(setLetterSpacing({ letterSpacing: changeLetterSpacing }));
  }
}