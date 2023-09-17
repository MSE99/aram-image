import { rmSync, existsSync } from 'node:fs'

describe('encode.js', () => {
    beforeEach(() => {
        jest.resetModules()
    })
    
    it('should save the required files to disk.', () => {
        require('./encode.js')
        require('./solution.js')

        expect(existsSync('./priv/png_b64.txt')).toBe(true)
        expect(existsSync('./priv/hanin_encoded_png.txt')).toBe(true)
        expect(existsSync('./priv/count.txt')).toBe(true)
        expect(existsSync('./priv/decoded_png.png')).toBe(true)
    
        rmSync('./priv/png_b64.txt')
        rmSync('./priv/hanin_encoded_png.txt')
        rmSync('./priv/count.txt')
        rmSync('./priv/decoded_png.png')
    })
})
