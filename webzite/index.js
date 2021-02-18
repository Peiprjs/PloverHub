const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/file1.html'));
});

app.use('/', router);
app.listen(process.env.port || 2000);

console.log('Running at Port 2000');