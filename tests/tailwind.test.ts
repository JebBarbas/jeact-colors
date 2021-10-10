import {
    Tailwind
} from '../src/index'

import color from './color'

import type {
    TailwindColorType
} from '../src/types'

test('Tailwind Color Groups', () => {
    const TailwindColorTypes:TailwindColorType[] = [
        Tailwind.amber, Tailwind.blue, Tailwind.coolGray, Tailwind.cyan,
        Tailwind.emerald, Tailwind.fuchsia, Tailwind.gray, Tailwind.green,
        Tailwind.indigo, Tailwind.lime, Tailwind.orange, Tailwind.pink,
        Tailwind.purple, Tailwind.red, Tailwind.rose, Tailwind.sky, 
        Tailwind.teal, Tailwind.trueGray, Tailwind.violet, Tailwind.warmGray,
        Tailwind.yellow
    ]

    TailwindColorTypes.forEach(group => {
        let groupKey: keyof typeof group
        for(groupKey in group){
            expect(group[groupKey]).toMatch(color)
        }
    })
})