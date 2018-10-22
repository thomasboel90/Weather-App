const request = require('request');

request('https://api.darksky.net/forecast/7614a08bd09aee76a2cfd2368a9577a7/ 37.8267,-122.4233', { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }
 	console.log(body);
 	console.log(`The weather is: ${body.currently.summary}, at ${body.currently.temperature} degrees Fahrenheit.`)
});

