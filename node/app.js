const express = require('express');
const { solve } = require('../pkg/ssvm_nodejs_starter_lib.js');
let fs = require('fs');
const app = express();
const port = 8080;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    
  fs.readFile('./node/public/index.html', null, function (error, data) {
      if (error) {
          res.writeHead(404);
          res.write('Whoops! File not found!');
      } else {
          res.write(data);
      }
      res.end();
  });
});
app.post('/result', function (req, res) {
  var a = parseFloat(req.body.a);
  var b = parseFloat(req.body.b);
  res.send(solve([a, b]))
})

app.listen(port, () => console.log(`Running at http://localhost:${port}`))