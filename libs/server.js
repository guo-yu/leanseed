'use strict';

// Global dependencies
import path from 'path'
import domain from 'domain'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import Lean from 'leanengine'

// Local dependencies
import API from '../routes'
import config from './consts'

// Consts
const APP_ID = process.env.LC_APP_ID
const APP_KEY = process.env.LC_APP_KEY
const MASTER_KEY = process.env.LC_APP_MASTER_KEY

Lean.initialize(APP_ID, APP_KEY, MASTER_KEY)
Lean.Cloud.useMasterKey() // 如果不希望使用 masterKey 权限，可以删除

// Init Express App
const app = express()

// Middlewares
app.use(require('./cloud'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// 未处理异常捕获 Middleware
app.use((req, res, next) => {
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
})

// API CORS Support
app.all('/api/*', (req, res, next) => {
  const origin = req.headers.origin

  if (config.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  }

  next()
})

// Init APIs
app.use('/api', API)

// 如果任何路由都没匹配到，则认为 404
// 生成一个异常让后面的 err handler 捕获
app.use((req, res, next) => 
  res.status(404))

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
const PORT = parseInt(process.env.LC_APP_PORT || 3000)

app.listen(PORT, () => 
  console.log('Node app is running, port:', PORT))
