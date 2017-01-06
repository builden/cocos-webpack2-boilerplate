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
