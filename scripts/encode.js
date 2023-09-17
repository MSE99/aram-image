import { basename } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { encodeInB64 } from '../lib/encoding.js'
import { replaceEvery } from '../lib/strings.js'

const pathInPriv = rawFilename => `./priv/${basename(rawFilename)}`

const readFromPriv = filename => readFileSync(pathInPriv(filename))

const storeInPriv = (filename, contents, enc = 'utf-8') => writeFileSync(
    pathInPriv(filename), 
    contents, 
    { encoding: enc }
)

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

