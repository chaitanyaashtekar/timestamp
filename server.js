var express = require('express');

var app = express();

app.get('/:datestring', function(req, res) {
  if (Date.parse(req.params.datestring)) {
    var d = new Date(req.params.datestring);
    var date = {
      unix: d.getTime(),
      natural: d.toDateString()
    };
    res.write(JSON.stringify(date));
  }
  else res.write(JSON.stringify({unix:null,natural:null}));
  res.end();

}).on('error', console.error);

app.listen(8080)
