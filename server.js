var express = require('express');
var path=require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use('/public', express.static(process.cwd() + '/public'))
app.get('/',function(req,res){
res.sendFile(process.cwd() + '/public/index.html');
});

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

app.listen(app.get('port'));
