const debug = require('debug');
const express = require('express');

const app = express();
const dlog = debug('graphql-help-template:index');

app.listen({ port: 9090 }, () => {
  dlog('listening on port 9090');
});
