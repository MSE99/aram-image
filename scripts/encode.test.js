import { existsSync } from 'node:fs'
import { removeAllInPrivExcept } from '../lib/files.js'

describe('encode.js', () => {
    beforeEach(() => {
        jest.resetModules()
    })
    
    afterAll(() => { removeAllInPrivExcept('icon.png') })

    it('should save the required files to disk.', () => {
        require('./encode.js')

        expect(existsSync('./priv/png_b64.txt')).toBe(true)
        expect(existsSync('./priv/hanin_encoded_png.txt')).toBe(true)
        expect(existsSync('./priv/count.txt')).toBe(true)
    })
})
