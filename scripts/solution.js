import { readFromPriv, storeInPriv } from '../lib/files.js'

const decode = () => {
    const utf8Str = readFromPriv('hanin_encoded_png.txt', 'utf-8')
    const bytes = Buffer.from(utf8Str, 'base64')

    storeInPriv('decoded_png.png', bytes)
}

decode()
