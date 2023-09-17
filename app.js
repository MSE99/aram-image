import express from 'express'
import { absPathInPriv, readFromPriv } from './lib/files'

const app = express()

app.get('/count', (_, res) => {
    const count = readFromPriv('count.txt', 'utf-8')
    res.status(200).send(count.toString())
})

app.get('/image', (_, res) => {
    try {res
        .header('Content-Type', 'image/png')
        .status(200)
        .sendFile(absPathInPriv('decoded_png.png')) } catch (err) {
            console.log(err)
            throw err
        }
})

export default app
