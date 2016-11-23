/*
Object.keys(process).forEach(function(value, key) {
	console.log(value);
}); 

*/

function prompt(question, callback){
	var stdin = process.stdin;
	var stdout = process.stdout;

	stdin.resume();
	stdout.write(question);

	stdin.once('data', function(data) {
		callback(data.toString().trim());
	});
}

prompt('what is your name?', function(data) {
	process.stdout.write(data);
	process.exit();

});

process.on('exit', function(){
	process.stdout.write(' \n bye bye \n');
	//console.log('bye bye');
});