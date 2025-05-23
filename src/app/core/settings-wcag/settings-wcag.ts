export enum FontSize {
    FONTSIZE_18 = 18,
    FONTSIZE_24 = 24,
    FONTSIZE_30 = 30
}

export const COLOR_YELLOW: string = 'rgb(255, 234, 0)';
export const COLOR_WHITE: string = 'white';

export const LINE_HEIGHT_MIN: string = '1.5';
export const LINE_HEIGHT_MAX: string = '2';

export const LETTER_SPACING_MIN: string = '0.12';
export const LETTER_SPACING_MAX: string = '0.14';

export enum UIActionType {
    FontSize = 'fontSize',
    LineHeight = 'lineHeight',
    LetterSpacing = 'letterSpacing',
    Color = 'color',
    ReadPage = 'readPage'
}