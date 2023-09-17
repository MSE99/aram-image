import { basename } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'

const pathInPriv = rawFilename => `./priv/${basename(rawFilename)}`

export const readFromPriv = (filename, encoding) => readFileSync(pathInPriv(filename), { encoding })

export const storeInPriv = (filename, contents, encoding) => writeFileSync(
    pathInPriv(filename), 
    contents, 
    { encoding }
)
