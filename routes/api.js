'use strict';

import express from 'express'
import { Cloud } from 'leanengine'

const API = express.Router()

// a test route
API.get('/ping', (req, res, next) => res.end('pong'))

// a example for LeanEngine Cloud function
API.get('/hello', (req, res, next) => {
  Cloud.run('hello', {}, {
    success: data => res.end(data),
    error: err => next(err)
  })
})

export default API
