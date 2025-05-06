import { createAction, props } from '@ngrx/store';

export const setFontSize = createAction(
  '[UI] Set Font Size',
  props<{ fontSize: number }>()
);
export const setColor = createAction(
  '[UI] Set Color',
  props<{ color: string }>()
);
