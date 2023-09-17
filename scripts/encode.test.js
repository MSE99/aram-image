import { rmSync, existsSync } from 'node:fs'

describe('encode.js', () => {
    beforeEach(() => {
        jest.resetModules()
    })
    
    it('should save the required files to disk.', () => {
        require('./encode.js')

        expect(existsSync('./priv/png_b64.txt')).toBe(true)
        expect(existsSync('./priv/hanin_encoded_ping.txt')).toBe(true)
        expect(existsSync('./priv/count.txt')).toBe(true)
    
        rmSync('./priv/png_b64.txt')
        rmSync('./priv/hanin_encoded_ping.txt')
        rmSync('./priv/count.txt')
    })
})
