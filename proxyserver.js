const express = require('express');  
const request = require('request');
const cors = require('cors');

let app = express();  
const url = 'http://149.28.243.63:9998';

const corsOptions = {
  "origin": '*',
  "methods": ['POST', 'OPTIONS'],
  "allowedHeaders": [
    'Accept', 'Authorization', 'Content-Type',
    'Origin', 'Referer',       'User-Agent'
  ],
  // "exposedHeaders": [],
  "credentials": true
};

app.options('/', cors(corsOptions));
app.post('/', cors(corsOptions), (req, res) => {
  console.log(`Request:\n${JSON.stringify(req.headers, null, 2)}`);
  req.pipe(request(url)).pipe(res);
});