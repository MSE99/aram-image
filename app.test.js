import request from 'supertest'
import app from './app.js'
import { readFromPriv, removeAllInPrivExcept } from './lib/files.js'

describe('app.js', () => {
    beforeEach(() => {
        require('./scripts/encode.js')
        require('./scripts/solution.js')
    })

    afterAll(() => { removeAllInPrivExcept(['icon.png']) })

    it('should return the number stored in count.txt when GET /count is hit.', async () => {
        const response = await request(app).get('/count')
        expect(response.status).toBe(200)
        expect(response.text).toBe('9001')
    })

    it('should return the image decode_png.png when GET /image is hit.', async () => {
        const response = await request(app).get('/image')
        const wanted = readFromPriv('decoded_png.png')

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toBe('image/png')

        expect(
            wanted.compare(response.body)
        ).toBe(0)
    })
})
