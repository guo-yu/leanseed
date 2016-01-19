import pkg from '../package.json'

export function Debug(type) {
  try {
    var debug = require('debug')
    return debug(`${pkg.name}:v${pkg.version}:${type}`)
  } catch (err) {
    return () => {}
  }
}
