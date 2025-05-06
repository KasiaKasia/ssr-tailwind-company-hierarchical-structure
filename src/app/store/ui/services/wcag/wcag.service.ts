import { inject, Injectable } from '@angular/core';
import { selectColor, selectFontSize, selectLetterSpacing, selectLineHeight } from '../../selectors/ui.selectors';
import { Store } from '@ngrx/store';
import { setColor, setFontSize, setLetterSpacing, setLineHeight } from '../../actions/ui.actions';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class WcagService {
  private document = inject(DOCUMENT);

  private color$ = this.store.select(selectColor);
  private fontSize$ = this.store.select(selectFontSize);
  private letterSpacing$ = this.store.select(selectLetterSpacing);
  private selectLineHeight$ = this.store.select(selectLineHeight);
  constructor(private store: Store) {
    this.fontSize$.pipe(takeUntilDestroyed()).subscribe(size => {
      this.document.body.style.fontSize = `${size}px`;
    });
    this.color$.pipe(takeUntilDestroyed()).subscribe(color => {
      this.document.body.style.setProperty('--main-color', `${color}`);
    });
    this.letterSpacing$.pipe(takeUntilDestroyed()).subscribe(letterSpacing => {   
      this.document.body.style.setProperty('--main-letter-spacing', `${letterSpacing}`);
    });
    this.selectLineHeight$.pipe(takeUntilDestroyed()).subscribe(lineHeight => {
      this.document.body.style.setProperty('--main-line-height', `${lineHeight}`);
    });
  }

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
    const changeLineHeight= getLineHeight === '1.5' ? '2' : '1.5';
    this.store.dispatch(setLineHeight({ lineHeight: changeLineHeight }));
  }
  setLetterSpacing() {
    const getLetterSpacing = getComputedStyle(this.document.body).getPropertyValue('--main-letter-spacing');
    console.log(typeof getLetterSpacing);
    const changeLetterSpacing = getLetterSpacing === '0.12' ? '0.14' : '0.12';
    this.store.dispatch(setLetterSpacing({ letterSpacing: changeLetterSpacing }));
  }
 
}