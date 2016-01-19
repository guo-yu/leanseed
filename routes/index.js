'use strict';

import domain from 'domain'
import routesAPI from './api'
import consts from '../libs/consts'

export const API = routesAPI

export function uncaughtException(req, res, next) {
  let d = domain.create()

  d.add(req)
  d.add(res)
  d.on('error', (err) => {
    console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err)

    if (!res.finished) {
      res.statusCode = 500
      res.setHeader('content-type', 'application/json; charset=UTF-8')
      res.end('uncaughtException')
    }
  })

  d.run(next)
}

export function CORS(req, res, next) {
  const origin = req.headers.origin

  if (consts.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  }

  next()
}

export function notFound(req, res, next) {
  res.status(404)
  res.end('404 Not found')
}
