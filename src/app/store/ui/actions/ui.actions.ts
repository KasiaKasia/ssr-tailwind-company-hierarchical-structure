import { createAction, props } from '@ngrx/store';

export const setFontSize = createAction(
  '[UI] Set Font Size',
  props<{ fontSize: number }>()
);
