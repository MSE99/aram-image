import { replaceEvery } from './strings.js'

describe('strings.js', () => {
    [
        {
            title: '"" -> ""',
            input: '',
            n: 3,
            rep: 'foo',
            expected: ''
        },
        {
            title: '123321 -> 12foo32foo',
            input: '123321',
            n: 3,
            rep: 'foo',
            expected: '12foo32foo'
        },
        {
            title: '123-456-789 -> 123foo456foo789',
            input: '123-456-789',
            n: 4,
            rep: 'foo',
            expected: '123foo456foo789'
        },
        {
            title: '123456789-123456789-123456789* -> 123456789[HANIN]123456789[HANIN]123456789[HANIN]',
            input: '123456789-123456789-123456789*',
            n: 10,
            rep: '[HANIN]',
            expected: '123456789[HANIN]123456789[HANIN]123456789[HANIN]'
        },
        {
            title: '1111 -> foofoofoofoo',
            input: '1111',
            n: 1,
            rep: 'foo',
            expected: 'foofoofoofoo'
        },
        {
            title: 'plz don\'t have a bug >.< -> bug-free...',
            input: 'plz don\'t have a bug >.<',
            n: 1,
            rep: 'bug-free',
            expected: 'bug-free'.repeat(24)
        },
    ].forEach(runTest)

    function runTest(scenario) {
        it(scenario.title, () => {
            expect(replaceEvery(scenario.input, scenario.n, scenario.rep)).toBe(scenario.expected)
        })
    }
})
