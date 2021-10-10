import {
    Web
} from '../src/index'

import color from './color'

import type { SimpleColorGroupTheme } from '../src/types'

test('Web Colors (separated)', () => {
    const WebColorGroups:SimpleColorGroupTheme[] = [
        Web.black, Web.blue, Web.brown, Web.cyan,
        Web.green, Web.orange, Web.pink, Web.purple,
        Web.red, Web.white, Web.yellow
    ]

    WebColorGroups.forEach(group => {
        let groupKey: keyof typeof group
        for(groupKey in group){
            expect(group[groupKey]).toMatch(color)
        }
    })
})

test('Web Colors (big object)', () => {
    let groupKey: keyof typeof Web.predefinedColors
    for(groupKey in Web.predefinedColors){
        expect(Web.predefinedColors[groupKey]).toMatch(color)
    }
})