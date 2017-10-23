const express = require('express')
const next = require('next')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 4004
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // serve service worker
    server.get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
