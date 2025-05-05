import { Inject, Injectable } from '@angular/core';
import { selectFontSize } from '../selectors/ui.selectors';
import { Store } from '@ngrx/store';
import { setFontSize } from '../actions/ui.actions';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  fontSize$ = this.store.select(selectFontSize);

  constructor(private store: Store, @Inject(DOCUMENT) private document: Document) {
    this.fontSize$.subscribe(size => {
      this.document.body.style.fontSize = `${size}px`;
    });
  }
  setFontSize(size: number) {
    this.store.dispatch(setFontSize({ fontSize: size }));
  }
}
