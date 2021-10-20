# @jeact/colors

A module that stores colors. Including Bootstrap and MaterialUI colors. (This module is inspired in jebbarbas's
`jebcolors` module, but this module only stores colors).

@jeact/colors is a npm module that stores a lot of colors (see 'Color Groups') to use with React (uses esnext import
/export), so it's required to have a Javascript compiler (if you are using react/react-native don't worry, this modules
will do it for you).

@jeact/colors is inspired (and created by the same author) in jebcolors, but this module has more colors, and only
colors (not any function nor classes). If you want to get the perfect color for a text (if its better white or black)
try using `@jeact/contrast-color`'s `contrastColor(color)` function.

## Instalation

```
npm i @jeact/colors
```

## Color Groups

@jeact/colors provide 6 color groups, each one with its own objects that store colors, you can see them all here:

### Bootstrap

Get the Bootstrap colors using the `Bootstrap` object.
```js
import { Bootstrap } from '@jeact/colors'
```

You can access to the default 
[bootstrap theme colors](https://getbootstrap.com/docs/5.0/customize/color/#theme-colors) 
(primary, secondary, warning, danger, etc...) using 
`Bootstrap.themeColors`.
```js
const {primary, success, danger} = Bootstrap.themeColors
```

You can access to the unused bootstrap colors (like indigo, purple, teal, etc...) using `Bootstrap.unusedColors`.
```js
const {indigo, purple, teal} = Bootstrap.unusedColors
```

You can use the bootstrap colors (the colors in the top of the tables 
[here](https://getbootstrap.com/docs/5.0/customize/color/#all-colors)) (like blue, green, red, yellow, etc...)
using `Bootstrap.shade500`.
```js
const {blue, green, red, yellow} = Bootstrap.shade500
```

You can get the white and black color using `Bootstrap.white` and `Bootstrap.black`.
```js
const {white, black} = Bootstrap
```

And finally, you can access to 
[all the colors of bootstrap](https://getbootstrap.com/docs/5.0/customize/color/#all-colors) using 
`Bootstrap.<color>[shade]` (bigger the number returns a darker color).
```js
const lightBlue = Bootstrap.blue[300]
const blue = Bootstrap.blue[500]
const darkBlue = Bootrstrap.blue[700]
```

### Material UI (MUI)

You can also get the Material UI colors using the `MaterialUI` object.
```js
import { MaterialUI } from '@jeact/colors'
```

You can access to the default theme colors and the dark theme colors using `MaterialUI.defaultThemeColors` and
`MaterialUI.darkThemeColors`
```js
// OPTIONAL: prefersDark() will return true if the user prefers darkmode, else otherwise
const dark = prefersDark()
const {primary, secondary, success} = dark ? MaterialUI.darkThemeColors : MaterialUI.defaultThemeColors
```

You can also access to a colors of the shades '500' (for primary colors) and 'A400' (por secondary colors) using
`MaterialUI.shade500` and `MaterialUI.shadeA400` (You can see those colors 
[here](https://mui.com/customization/color/#heading-playground)).
```js
const primaryColor = MaterialUI.shade500.red
const secondaryColor = MaterialUI.shadeA400.purple
```

To access to the MUI common colors, use `MaterialUI.common`
```js
const {black, white} = MaterialUI.common
```

And finally, you can access the all the 
[mui colors](https://mui.com/customization/color/#heading-color-palette) using `MaterialUI.<color>[shade]`
(bigger the number returns a darker color).
```js
const lightRed = MaterialUI.red[300]
const red = MaterialUI.red[500]
const darkRed = MaterialUI.red[700]

const secondaryPurple = MaterialUI.purple['A400']
```

### Tailwind

Tailwind colors are available in the `Tailwind` object.
```js
import { Tailwind } from '@jeact/colors'
```

To access the [Tailwind colors](https://tailwindcss.com/docs/customizing-colors) (enter the page and go all down, where 
are all the colors) you need to use `Tailwind.<color>[shade]` (bigger the number returns a darker color).
```js
const rose = Tailwind.rose[500]
const red = Tailwind.red[500]
const blue = Tailwind.blue[500]
```

### Web Colors

To access to the web colors you need to import the `Web` object.
```js
import { Web } from '@jeact/colors'
```

Now you can access any web color using the color-like objects, or using the mega object predefinedColors that contains
all the web colors.
```js
const hotPink_1 = Web.pink.hotPink
const hotPink_2 = Web.predefinedColors.hotPink

const royalBlue_1 = Web.blue.royalBlue
const royalBlue_2 = Web.predefinedColors.royalBlue
```

### Social Colors

To access to social colors (the colors of the social media), you need to import the `Social` object.
```js
import { Social } from '@jeact/colors'
```

Now, any available social media color is in `Social.misc`.
```js
const facebookColor = Social.misc.facebook
const githubColor = Social.misc.github
const googleColor = Social.misc.google
```

### Jebcolors Colors

To access to jebcolors colors (this colors are some that I liked because they are pretty), you need to import the 
`JebColors` object.
```js
import { JebColors } from '@jeact/colors'
```

Now, any available jebcolors color is in `JebColors.themeColors`.
```js
const {magic, juice, blood} = JebColors.themeColors
```

## How to know the contrast text?

Sometimes you want to get the best color for a text with some background color, an example is: if you want to create
a Google Login button, and you use `Social.misc.google` color for the background of the button... what should be the
color text to give good contrast?

To get the perfect color of the text you can use another `@jeact` package, 
[`@jeact/constrast-color`](https://www.npmjs.com/package/@jeact/contrast-color).

```js
import { Social } from '@jeact/colors'
import contrastColor from '@jeact/contrast-color'

const { google } = Social.misc

const buttonBackgroundColor = google
const buttonTextColor = contrastColor(google)
```

Now an example with `react`.

```tsx
import { Social } from '@jeact/colors'
import contrastColor from '@jeact/contrast-color'

const GoogleButton = () => {
    const { google } = Social.misc

    // TODO: Function to login with Google
    const loginWithGoogle = () => {
        // ...
    }

    return (
        <button style={{backgroundColor: google, color: contrastColor(google)}} onClick={loginWithGoogle}>
            Login With Google
        </button>
    )
}
```
