## LeanSeed ![npm](https://badge.fury.io/js/leanseed.png)

LeanSeed (灵犀) 是以 Express 4.x 和 Vue.js 为基础的全栈开发框架，灵犀支持 LeanEngine，可将项目一键部署到 LeanCloud，无需配置服务器，体验 Serverless 的开发方式。

在灵犀中，我们使用了前后端完全分离的架构，因此，开发者可以不用在乎前端项目和后端逻辑的开发进度，并行开发。前后端代码均使用了 ES2015（ES6）编写，完全支持 `import`、`=>`、解构等全新 JavaScript 语法，统一了前后端模块的模块定义和加载方式，使用 JS 全栈编写项目更加便捷，简单，易于理解。此外，灵犀采用 Babel 6.x 编译项目源码，无需担心服务器生产环境中 Node 版本是否支持全新 JavaScript 标准。

### 在线演示
灵犀的演示项目站点为：
[http://leanseed.leanapp.cn/](http://leanseed.leanapp.cn/)

可访问此 API 测试在线演示是否稳定：
[http://leanseed.leanapp.cn/api/ping](http://leanseed.leanapp.cn/api/ping)

### 初始化项目
灵犀的初始化非常简单，按照如下步骤进行：

将本项目 Clone 项目到本地

```bash
$ git clone git@github.com:guo-yu/leanseed.git
```
安装相关依赖：

```bash
$ cd leanseed
$ cnpm install .
$ npm install -g avoscloud-code
```

使用 [LeanEngine cli](https://www.npmjs.com/package/avoscloud-code) 工具在本地注册此项目：

```bash
$ lean add <appName> <appId>
```
其中，appName 填写为在 LeanCloud 项目中设置的二级域名。

### 文件结构
灵犀中的文件结构很简单，依次代表以下含义：
- `app.js` API 服务入口文件，在开发模式下采用了 require hook 的方式动态编译源码
- `server` 后端服务文件夹，在生产环境使用 npm run build 编译到 ./build 文件夹中
  - `index.js` 后端服务入口文件
  - `routes.js` 与 `api.js` 后端路由文件
- `libs` 前端库文件夹
	* `app.js` 前端项目主文件
	* `routes.js` 前端路由文件
- `components` 前端组件文件夹，包括所有 Vue 组件
- `css` 样式文件夹，目前支持以 cssnext 形式编写
- `dist` 前端编译后的最终文件，此文件夹的文件默认会托管在 API 服务的根域，包括一个 `index.html` 入口文件
- `build` 服务编译后的最终文件，将成为生产环境入口执行文件
- `webpack.config.js` webpack 配置文件

### 目前用以构建此项目的依赖模块版本
- Vue.js `1.x`
- Express `4.x`
- LeanEngine `0.4.0`
- Babel `6.x`
- avoscloud-code cli > `1.1.x` (推荐使用)

### 本地开发
灵犀的前后端分别由 Express 和 Vue 搭建，后端服务是一个 API 服务，前后端完全分离，因此开发模式也是不同的：

**一、启用本地开发服务器（API 服务）：**

```bash
$ npm run debug
```
API 服务请访问：`http://localhost:3000`

**二、启用基于 Webpack 动态热替换的前端开发工作流：**

```bash
$ npm run dev
```
前端开发工作流请访问 `http://localhost:8080`

**三、熟悉自动化工作流**

在先前提到的 `webpack.config.js` 中，我们定义了所有前端工作流，这些工作流的快捷方式，可以在 `package.json` 中的 scripts 字段找到。

总的来说，执行：
- `npm start` 会启动 API 服务
- `npm run build` 会编译前端和后端代码，包括所有静态资源文件，到 `./dist` 文件夹
- `npm run debug` 会启动前端开发工作流
- `npm run deploy` 会使用 leanEngine CLI 将项目发布到测试环境

### 部署到测试环境
可利用 [LeanEngine cli](https://www.npmjs.com/package/avoscloud-code) 一键部署到测试环境：

```bash
$ npm run deploy
```
部署到测试环境由于需要自动化安装依赖模块，可能需要近五分钟左右，请耐心等待至返回成功部署的结果以及 hashTag。

测试环境清访问：`http://stg-[appName].leanapp.cn`
免费项目的测试环境暂时不可用，可直接访问: `http://[appName].leanapp.cn`

### 发布到生产环境
可利用 [LeanEngine cli](https://www.npmjs.com/package/avoscloud-code) 一键发布到生产环境：

```bash
$ npm run pub
```

生产环境清访问：`http://[appName].leanapp.cn`

### 其他
- 更多关于 Lean Engine 和其 CLI 的操作，可以查阅 avoscloud-code@npm 和 leanengine@npm 相关模块文档。

### MIT license
Copyright (c) 2016 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

