export type Color = string

export type SimpleColorGroupTheme = Record<string, string>

export interface BootstrapColorType {
    '100'   : Color,
    '200'   : Color,
    '300'   : Color,
    '400'   : Color,
    '500'   : Color,
    '600'   : Color,
    '700'   : Color,
    '800'   : Color,
    '900'   : Color,
}

export interface TailwindColorType extends BootstrapColorType {
    '50'    : Color,
}

export interface MaterialColorType extends TailwindColorType {
    'A100'  : Color,
    'A200'  : Color,
    'A400'  : Color,
    'A700'  : Color,
}