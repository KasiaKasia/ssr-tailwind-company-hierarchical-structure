import { createAction, props } from '@ngrx/store';

export const setFontSize = createAction(
  '[UI] Set Font Size',
  props<{ fontSize: number }>()
);

export const setColor = createAction(
  '[UI] Set Color',
  props<{ color: string }>()
);

export const setLetterSpacing = createAction(
  '[UI] Set Letter Spacing',
  props<{ letterSpacing: string }>()
);

export const setLineHeight = createAction(
  '[UI] Set Line Height',
  props<{ lineHeight: string }>()
);