import {
    Bootstrap
} from '../src/index'

import color from './color'

import type {
    SimpleColorGroupTheme,
    BootstrapColorType
} from '../src/types'

test('Bootstrap Color Groups', () => {
    const BootstrapColorGroups:BootstrapColorType[] = [
        Bootstrap.blue, Bootstrap.cyan, Bootstrap.gray, Bootstrap.green,
        Bootstrap.indigo, Bootstrap.orange, Bootstrap.pink, Bootstrap.purple,
        Bootstrap.red, Bootstrap.teal, Bootstrap.yellow
    ]

    BootstrapColorGroups.forEach(group => {
        let groupKey: keyof typeof group
        for(groupKey in group){
            expect(group[groupKey]).toMatch(color)
        }
    })
})

test('Bootstrap Themes', () => {
    const BootstrapThemes:SimpleColorGroupTheme[] = [
        Bootstrap.shade500, Bootstrap.themeColors, Bootstrap.unusedColors
    ]

    BootstrapThemes.forEach(theme => {
        let themeKey: keyof typeof theme
        for(themeKey in theme){
            expect(theme[themeKey]).toMatch(color)
        }
    })
})

test('Bootstrap Individual Colors', () => {
    // Test individual colors
    expect(Bootstrap.white).toMatch(color)
    expect(Bootstrap.black).toMatch(color)  
})