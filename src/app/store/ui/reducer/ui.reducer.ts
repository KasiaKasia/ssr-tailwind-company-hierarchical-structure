import { createReducer, on } from '@ngrx/store';
import { setColor, setFontSize } from '../actions/ui.actions';
import { initialUiState } from '../state/ui.state';

export const uiReducer = createReducer(
  initialUiState,
  on(setFontSize, (state, { fontSize }) => ({
    ...state,
    fontSize,
  })),
  on(setColor, (state, { color }) => ({
    ...state,
    color
  }))
);
