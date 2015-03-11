var express = require('express'),
	app = express();
	
app.use(express.static(__dirname));

var port = process.env.PORT || 9000;

app.listen(port);

console.log('Listening on port ' + port);
