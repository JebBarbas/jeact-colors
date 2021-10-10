// Material UI Theme Colors
import * as colors from './variableColors'

// Material main colors (used in dark theme)
/**
 * Colors of the dark theme of MaterialUI (only "main colors")
 */
export const darkThemeColors = {
    "primary"   : colors.blue[200],
    "secondary" : colors.purple[200],
    "error"     : colors.red[500],
    "info"      : colors.lightBlue[400],
    "success"   : colors.green[400],
    "warning"   : colors.orange[400]
}

// Material main colors (used in default theme)
/**
 * Colors of the default theme of MaterialUI (only "main" colors)
 */
export const defaultThemeColors = {
    "primary"   : colors.blue[700],
    "secondary" : colors.purple[500],
    "error"     : colors.red[700],
    "info"      : colors.lightBlue[700],
    "success"   : colors.green[800],
    "warning"   : colors.orange[800]
}

// Material colors in shades
/**
 * MaterialUI colors in its '500' shade (this are used as primary colors)
 */
export const shade500 = {
    "red"       : colors.red[500],
    "pink"      : colors.pink[500],
    "purple"    : colors.purple[500],
    "deepPurple": colors.deepPurple[500],
    "indigo"    : colors.indigo[500],
    "blue"      : colors.blue[500],
    "lightBlue" : colors.lightBlue[500],
    "cyan"      : colors.cyan[500],
    "teal"      : colors.teal[500],
    "green"     : colors.green[500],
    "lightGreen": colors.lightGreen[500],
    "lime"      : colors.lime[500],
    "yellow"    : colors.yellow[500],
    "amber"     : colors.amber[500],
    "orange"    : colors.orange[500],
    "deepOrange": colors.deepOrange[500],

    "brown"     : colors.brown[500],
    "blueGrey"  : colors.blueGrey[500],
    "grey"      : colors.grey[500],

    "white"     : colors.common.white,
    "black"     : colors.common.black
}

/**
 * MaterialUI colors in its 'A400' shade (this are used as secondary colors because have more saturation)
 */
export const shadeA400 = {
    "red"       : colors.red['A400'],
    "pink"      : colors.pink['A400'],
    "purple"    : colors.purple['A400'],
    "deepPurple": colors.deepPurple['A400'],
    "indigo"    : colors.indigo['A400'],
    "blue"      : colors.blue['A400'],
    "lightBlue" : colors.lightBlue['A400'],
    "cyan"      : colors.cyan['A400'],
    "teal"      : colors.teal['A400'],
    "green"     : colors.green['A400'],
    "lightGreen": colors.lightGreen['A400'],
    "lime"      : colors.lime['A400'],
    "yellow"    : colors.yellow['A400'],
    "amber"     : colors.amber['A400'],
    "orange"    : colors.orange['A400'],
    "deepOrange": colors.deepOrange['A400'],

    "brown"     : colors.brown['A400'],
    "blueGrey"  : colors.blueGrey['A400'],
    "grey"      : colors.grey['A400'],

    "white"     : colors.common.white,
    "black"     : colors.common.black
}