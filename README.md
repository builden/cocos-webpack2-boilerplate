# Cocos2d-js Webpack2打包方案

## 基于[node-babel-boilerplate](https://github.com/builden/node-babel-boilerplate)

## Webpack2配置
* [Webpack2 docs](https://webpack.js.org/)
* 参考[create-react-app](https://github.com/facebookincubator/create-react-app)
* [Webpack2终极优化](http://imweb.io/topic/5868e1abb3ce6d8e3f9f99bb?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
* [webpack-dev-server使用说明](https://segmentfault.com/a/1190000006670084)

### 安装
```bash
$ yarn add webpack@^2.2.0-rc.3 -D
$ yarn add webpack-dev-server@^2.2.0-rc.0 -D
```

## Cocos常用命令
```bash
# 创建新项目
$ cocos new cocos-proj -l js
$ cocos new cocos-proj -l js --no-native

# 编译
$ cocos compile -p web -m release --source-map
```
