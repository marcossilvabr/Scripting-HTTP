var https = require('https');

function getHTML(options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var chunk = "";
    response.on('data', function(data) {
      chunk += data

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(chunk);
    });

  });

};

function printHTML(html) {
    console.log(html);
};

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions, printHTML);