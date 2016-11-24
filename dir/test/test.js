var prompt = require('./../prompt');

prompt('what is your name?', function(data) {
	process.stdout.write(data);
	process.exit();

});

process.on('exit', function(){
	process.stdout.write(' \n bye \n');
	//console.log('bye bye');
});

