export default {
  whiteOrigins: [
    'http://localhost:8080',
    'http://localhost:3000',
    // 以下两个是在 LeanCloud 中配置的 host，xxx 替换为自己的域名
    'http://stg-[appName].leanapp.cn',
    'http://[appName].leanapp.cn'
  ],
  errorsMap: {
    '401': 'Auth failed',
    '500': 'Server Error',
    '403': 'Request Forbidden',
    '404': 'Not found'
  }
}