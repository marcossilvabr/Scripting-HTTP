var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    var chunk = "";
    response.on('data', function(data) {
      chunk += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(chunk);
    });

  });
};

getAndPrintHTML();