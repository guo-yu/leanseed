'use strict';

// Global dependencies
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import Lean from 'leanengine'

// Local dependencies
import {
  API,
  uncaughtException,
  CORS,
  errorHandler,
  notFound,
} from '../routes'

// LeanEngine Setup
Lean.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})
Lean.Cloud.useMasterKey() // 如果不希望使用 masterKey 权限，可以删除

// Init Express App
const app = express()

// Middlewares and Routes
app.use(express.static('dist'))
app.use(require('./cloud').default) // to fit babel 6.x
app.use(Lean.express())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(uncaughtException)
app.all('/api/*', CORS)

// APIs setup
app.use('/api', API)

// Error handlers
app.use(errorHandler)
app.use(notFound)

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000)

app.listen(PORT, () =>
  console.log('LeanSeed app is running on port: ', PORT))
