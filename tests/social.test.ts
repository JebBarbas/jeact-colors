import {
    Social
} from '../src/index'

import color from './color'

test('Social Colors (misc object)', () => {
    let groupKey: keyof typeof Social.misc
    for(groupKey in Social.misc){
        expect(Social.misc[groupKey]).toMatch(color)
    }
})