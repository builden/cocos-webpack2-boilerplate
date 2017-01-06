# WebSocket

## 测试服务器搭建
* [node-ws](https://github.com/websockets/ws)

### 工程搭建
```bash
$ yarn add ws
```
### 服务端测试代码
```js
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
```

### 客户端测试代码
```js
var WebSocket = require('ws');
// `/path`可以任意，如果Server端创建时指定了path属性，则只能用对应的path才能连上
var ws = new WebSocket('ws://localhost:8081/path');

ws.on('open', function open() {
  console.log('on open');
  ws.send('something');
});

ws.on('message', function (data, flags) {
  console.log('on message', data, 'flags', flags);
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});

ws.on('close', (code, message) => {
  console.log('on close', code, message);
});
```

### Cocos客户端测试代码
```js
const ws = new WebSocket('ws://localhost:8081');

ws.onopen = (evt) => {
  console.log('onopen', evt);
  ws.send('something');
};

ws.onmessage = (evt) => {
  console.log('onmessage', evt);
};

ws.onerror = (evt) => {
  console.log('onerror', evt);
};

ws.onclose = (evt) => {
  console.log('onclose', evt);
};

window.ws = ws;
```