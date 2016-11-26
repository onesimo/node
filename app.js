var http = require('http');

function handleRequest(request, response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});

	var count = 2 + 2;

	return response.end('The value os count is =>'.concat(count))
}

var server = http.createServer(handleRequest);
server.listen(3000,'localhost');

server.on('connection', function(client){
	console.log('new connections '.concat(client.remoteAddress));
});

/*
http.createServer(function(request, response){
	console.log(request);

	response.writeHead(200,{
		'Content-Type' : 'text/plain'
	})
	return response.end('hello world 2 ');
}).listen(3000,'localhost');
*/