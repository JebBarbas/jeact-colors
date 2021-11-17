import {
    MaterialUI
} from '../src/index'

import color from './color'

import type {
    SimpleColorGroupTheme,
    MaterialUIColorType
} from '../src/types'

test('MaterialUI Color Groups', () => {
    const MaterialUIColorGroups:MaterialUIColorType[] = [
        MaterialUI.amber, MaterialUI.blue, MaterialUI.blueGrey, MaterialUI.brown,
        MaterialUI.cyan, MaterialUI.deepOrange, MaterialUI.deepPurple, MaterialUI.green,
        MaterialUI.grey, MaterialUI.indigo, MaterialUI.lightBlue, MaterialUI.lightGreen,
        MaterialUI.lime, MaterialUI.orange, MaterialUI.pink, MaterialUI.purple, 
        MaterialUI.red, MaterialUI.teal, MaterialUI.yellow
    ]

    MaterialUIColorGroups.forEach(group => {
        let groupKey: keyof typeof group
        for(groupKey in group){
            expect(group[groupKey]).toMatch(color)
        }
    })
})

test('MaterialUI Themes', () => {
    const MaterialUIThemes:SimpleColorGroupTheme[] = [
        MaterialUI.defaultThemeColors, MaterialUI.darkThemeColors,
        MaterialUI.shade500, MaterialUI.shadeA400
    ]

    MaterialUIThemes.forEach(theme => {
        let themeKey: keyof typeof theme
        for(themeKey in theme){
            expect(theme[themeKey]).toMatch(color)
        }
    })
})

test('MaterialUI Common', () => {
    // Test individual colors
    let commonKey: keyof typeof MaterialUI.common
    for(commonKey in MaterialUI.common){
        expect(MaterialUI.common[commonKey]).toMatch(color)
    }
})