## LeanSeed 

LeanSeed (灵犀) 是以 Express 4.x 和 Vue.js 为基础的全栈开发框架，灵犀支持 LeanEngine，可将项目一键部署到 LeanCloud，达到 Serverless 开发方式。

### 初始化项目
灵犀的初始化非常简单，按照如下步骤进行：

Clone 项目到本地

```bash
$ git clone git@github.com:guo-yu/leanengine-seed.git
```
安装相关依赖：

```bash
$ cd leanengine-seed
$ cnpm install .
```

使用 avoscloud cli 工具在本地注册此项目：

```bash
$ avoscloud add <appName> <appId>
```
其中，appName 最好填写为你在 LeanCloud 设置的二级域名。

### 本地开发
启用本地开发服务器（API 服务）：

```bash
$ avoscloud
```
API 服务请访问：`http://localhost:3000`

启用基于 Webpack 动态热加载的前端开发工作流：

```bash
$ npm run dev
```
前端开发工作流请访问 `http://localhost:8080`

### 部署到测试环境
可利用 avoscloud cli 一键部署到测试环境：

```bash
$ avoscloud deploy
```
测试环境清访问：`http://stg-[appName].leanapp.cn`

### 发布到生产环境
可利用 avoscloud cli 一键发布到生产环境：

```bash
$ avoscloud publish
```

生产环境清访问：`http://[appName].leanapp.cn`

### 其他
更多关于 LeanEngine 的操作，可以查阅 avoscloud-code@npm 和 leanengine@npm 相关模块文档

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

