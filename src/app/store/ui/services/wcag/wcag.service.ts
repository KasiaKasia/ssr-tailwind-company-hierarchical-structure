import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setColor, setFontSize, setLetterSpacing, setLineHeight } from '../../actions/ui.actions';
import { DOCUMENT } from '@angular/common';
import { WcagStoreService } from '../wcag-store/wcag-store.service';

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
    const changeColor = getColor === 'rgb(255, 234, 0)' ? 'white' : 'rgb(255, 234, 0)';
    this.store.dispatch(setColor({ color: changeColor }));
  }

  setLineHeight() {
    const getLineHeight = getComputedStyle(this.document.body).getPropertyValue('--main-line-height').trim();
    const changeLineHeight = getLineHeight === '1.5' ? '2' : '1.5';
    this.store.dispatch(setLineHeight({ lineHeight: changeLineHeight }));
  }

  setLetterSpacing() {
    const getLetterSpacing = getComputedStyle(this.document.body).getPropertyValue('--main-letter-spacing');
    console.log(typeof getLetterSpacing);
    const changeLetterSpacing = getLetterSpacing === '0.12' ? '0.14' : '0.12';
    this.store.dispatch(setLetterSpacing({ letterSpacing: changeLetterSpacing }));
  }
}