export interface UiState {
    fontSize?: number;
    color?: string;
    letterSpacing?: string;
    lineHeight?: string;
}

export const initialUiState: UiState = {
    fontSize: 19,
    color: 'white',
    letterSpacing: '0.12',
    lineHeight: '1.5'
};
