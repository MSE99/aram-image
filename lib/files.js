import { basename } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'

const pathInPriv = rawFilename => `./priv/${basename(rawFilename)}`

export const readFromPriv = filename => readFileSync(pathInPriv(filename))

export const storeInPriv = (filename, contents, enc = 'utf-8') => writeFileSync(
    pathInPriv(filename), 
    contents, 
    { encoding: enc }
)
