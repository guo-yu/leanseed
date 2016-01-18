'use strict';

import express from 'express'

const Router = express.Router()

Router.get('/ok', (req, res) => res.end('ok'))

export default Router
