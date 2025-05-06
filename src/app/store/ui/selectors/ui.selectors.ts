import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../state/ui.state';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectFontSize = createSelector(
  selectUiState,
  (state) =>  state.fontSize 
);

export const selectColor = createSelector(
  selectUiState,
  (state) =>  state.color 
);