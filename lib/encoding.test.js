import { encodeInB64 } from './encoding'

describe('encoding.js', () => {
    it('should offer a utility to encode a string in base 64.', () => {
        const input = 'foo is great'
        const expected = Buffer.from(input).toString('base64')
        expect(encodeInB64(input)).toBe(expected)
    })

    it('should offer a utility to serialize a buffer into a base 64 encoded string.', () => {
        const input = Buffer.from('foo is great')
        const expected = input.toString('base64')
        expect(encodeInB64(input)).toBe(expected)
    })
})
