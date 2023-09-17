import { encodeInB64 } from '../lib/encoding.js'
import { replaceEvery } from '../lib/strings.js'

import {
    readFromPriv,
    storeInPriv
} from '../lib/files.js'

const encode = () => {
    const iconBytes = readFromPriv('icon.png')

    const encoded = encodeInB64(iconBytes)
    storeInPriv('png_b64.txt', encoded, 'utf-8')

    const modified = replaceEvery(encoded, 10, '[HANIN]')
    storeInPriv('hanin_encoded_png.txt', modified, 'utf-8')

    const count = modified.match(/\[HANIN\]/gm)?.length ?? 0
    storeInPriv('count.txt', count.toString(), 'utf-8')
}

encode()

