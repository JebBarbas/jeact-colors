import {
    JebColors
} from '../src/index'

import color from './color'

test('JebColors Colors (misc object)', () => {
    let groupKey: keyof typeof JebColors.misc
    for(groupKey in JebColors.misc){
        expect(JebColors.misc[groupKey]).toMatch(color)
    }
})