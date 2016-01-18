'use strict';

import express from 'express'

const Router = express.Router()

Router.get('/ok', (req, res) => res.send(1))

export default Router
