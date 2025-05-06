import { inject, Injectable } from '@angular/core';
import { selectColor, selectFontSize } from '../../selectors/ui.selectors';
import { Store } from '@ngrx/store';
import { setColor, setFontSize } from '../../actions/ui.actions';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class WcagService {
  private document = inject(DOCUMENT);

  color$ = this.store.select(selectColor);
  fontSize$ = this.store.select(selectFontSize);

  constructor(private store: Store) {
    this.fontSize$.pipe(takeUntilDestroyed()).subscribe(size => {
      this.document.body.style.fontSize = `${size}px`;
    });
    this.color$.pipe(takeUntilDestroyed()).subscribe(color => {
      this.document.body.style.setProperty('color', `${color}`);
      this.document.body.style.setProperty('border-color', `${color}`);
    });
  }

  setFontSize(size: number) {
    this.store.dispatch(setFontSize({ fontSize: size }));
  }
  setColor() {
    const getColor = this.document.body.style.color;
    const chengeColor = (`${getColor}` === '#ffea00' && 'rgb(255, 234, 0)') ? 'white' : 'rgb(255, 234, 0)'
    this.store.dispatch(setColor({ color: chengeColor }));
  }
}