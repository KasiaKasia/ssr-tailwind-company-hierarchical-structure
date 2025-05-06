import { inject, Injectable } from '@angular/core';
import { selectUiSettings } from '../../selectors/ui.selectors';
import { Store } from '@ngrx/store';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class WcagStoreService {
  private document = inject(DOCUMENT);
  private store = inject(Store);
  private ui$ = this.store.select(selectUiSettings);

  getUISettingsWCAG() {
    this.ui$.pipe(takeUntilDestroyed()).subscribe(({ fontSize, color, letterSpacing, lineHeight }) => {
      const bodyStyle = this.document.body.style;

      bodyStyle.fontSize = `${fontSize}px`;
      bodyStyle.setProperty('--main-color', `${color}`);
      bodyStyle.setProperty('--main-letter-spacing', `${letterSpacing}`);
      bodyStyle.setProperty('--main-line-height', `${lineHeight}`);
    });
  }
}