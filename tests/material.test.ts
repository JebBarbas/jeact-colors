import {
    Material
} from '../src/index'

import color from './color'

import type {
    SimpleColorGroupTheme,
    MaterialColorType
} from '../src/types'

test('Material Color Groups', () => {
    const MaterialColorGroups:MaterialColorType[] = [
        Material.amber, Material.blue, Material.blueGrey, Material.brown,
        Material.cyan, Material.deepOrange, Material.deepPurple, Material.green,
        Material.grey, Material.indigo, Material.lightBlue, Material.lightGreen,
        Material.lime, Material.orange, Material.pink, Material.purple, 
        Material.red, Material.teal, Material.yellow
    ]

    MaterialColorGroups.forEach(group => {
        let groupKey: keyof typeof group
        for(groupKey in group){
            expect(group[groupKey]).toMatch(color)
        }
    })
})

test('Material Themes', () => {
    const MaterialThemes:SimpleColorGroupTheme[] = [
        Material.defaultThemeColors, Material.darkThemeColors,
        Material.shade500, Material.shadeA400
    ]

    MaterialThemes.forEach(theme => {
        let themeKey: keyof typeof theme
        for(themeKey in theme){
            expect(theme[themeKey]).toMatch(color)
        }
    })
})

test('Material Common', () => {
    // Test individual colors
    let commonKey: keyof typeof Material.common
    for(commonKey in Material.common){
        expect(Material.common[commonKey]).toMatch(color)
    }
})