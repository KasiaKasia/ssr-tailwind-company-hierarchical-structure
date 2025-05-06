import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../state/ui.state';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectUiSettings = createSelector(
  selectUiState,
  (state) => ({
    fontSize: state.fontSize,
    color: state.color,
    letterSpacing: state.letterSpacing,
    lineHeight: state.lineHeight,
  })
);