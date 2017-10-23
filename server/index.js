const path = require('path')
const next = require('next')
const express = require('express')
const helmet = require('helmet')

const port = parseInt(process.env.PORT, 10) || 4004
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // Obvious security boxes
    server.use(helmet())
    server.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
    server.use(helmet.referrerPolicy({ policy: 'same-origin' }));

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
