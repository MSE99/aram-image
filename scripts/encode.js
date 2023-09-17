import { encodeInB64 } from '../lib/encoding.js'
import { replaceEvery } from '../lib/strings.js'

import {
    readFromPriv,
    storeInPriv
} from '../lib/files.js'

const encode = () => {
    const iconBytes = readFromPriv('icon.png')

    const encoded = encodeInB64(iconBytes)
    storeInPriv('png_b64.txt', encoded)

    const modified = replaceEvery(encoded, 10, '[HANIN]')
    storeInPriv('hanin_encoded_ping.txt', modified, 'utf-8')

    const count = modified.match(/\[HANIN\]/gm)?.length ?? 0
    storeInPriv('count.txt', count.toString())
}

encode()

