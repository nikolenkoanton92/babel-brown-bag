var express =  require('express');

var app = express();

app.use('/static', express.static('./build'));

app.use(function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, function() {
  console.log('Server listen at*:' + 5000);
});
