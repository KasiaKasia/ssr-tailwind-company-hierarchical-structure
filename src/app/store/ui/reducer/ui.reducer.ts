import { createReducer, on } from '@ngrx/store';
import { setColor, setFontSize, setLetterSpacing, setLineHeight } from '../actions/ui.actions';
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
  })),
  on(setLetterSpacing, (state, { letterSpacing }) => ({
    ...state,
    letterSpacing
  }))
  ,
  on(setLineHeight, (state, { lineHeight }) => ({
    ...state,
    lineHeight
  }))
);
