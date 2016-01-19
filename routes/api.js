'use strict';

import express from 'express'

const API = express.Router()

API.get('/ping', (req, res, next) => res.end('pong'))

export default API
