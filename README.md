# multi-pages-demo

- [multi-pages-demo](#multi-pages-demo)
  - [File Structure](#file-structure)
  - [vue.config.js配置](#vueconfigjs配置)
  - [网页文件设置](#网页文件设置)
    - [index文件设置](#index文件设置)
    - [实现网页跳转](#实现网页跳转)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)

## File Structure

`src`存放 vue 项目的源代码。其文件夹下的各个文件（文件夹）分别为：

​`assets`​：资源文件，比如存放 css，图片等资源。

`​component`​：组件文件夹，用来存放 vue 的公共组件（注册于全局，在整个项目中通过关键词便可直接输出）。

`​router​`:用来存放 ​index.js​，这个 js 用来配置路由

`​tool`​：用来存放工具类 js，将 js 代码封装好放入这个文件夹可以全局调用（比如常见的​ api.js​，​http.js​ 是对 http 方法和 api 方法的封装）。

​`views​`：用来放主体页面，虽然和组件文件夹都是 vue 文件，但 views 下的 vue 文件是可以用来充当路由 view 的。

`​<page name>.js`​:是项目的入口文件，作用是初始化 vue 实例，并引入所需要的插件。

```bash
├───public
└───src
    ├───assets
    ├───components
    │       AppHeader.vue # 全局公共组件
    │
    ├───index
    │   │   index.js
    │   │   index.vue
    │   │
    │   └───router # index页面路由
    │           index.js
    │
    ├───pages2
    │   │   page2.js
    │   │   page2.vue
    │   │
    │   └───router # page2页面路由
    │           index.js
    │
    └───views
```

## vue.config.js配置

```js
module.exports = {
  devServer: {
    port: 8081, // 端口
  },
  publicPath: '/',
  // 页面名称
  pages: {
    index: {
      // 当前页面的入口文件
      entry: 'src/index/index.js',
      // 网页源文件
      template: 'public/index.html',
      // 编译后的输出文件（dist中）
      filename: 'index.html',
      // 网页标题
      title: "Home"
    },
    page2: {
      entry: 'src/pages2/page2.js',
      template: 'public/page2.html',
      filename: 'page2.html',
      title: "Page2"
    }
  }
}
```

## 网页文件设置

```bash
PUBLIC
    favicon.ico 网页图标
    index.html 主页
    page2.html 二级页面
```

### index文件设置

```html
    ...
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
    ...

  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="index"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

page2同上

### 实现网页跳转

index.js

```html
    <a href="page2" target="_Blank">跳到page2</a>
```

page.js

```html
    <a href="index">回到首页</a>
```

## Project setup

```bash
git clone 
```

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```
