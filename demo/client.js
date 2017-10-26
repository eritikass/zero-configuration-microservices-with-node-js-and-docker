const cote = require('cote');

const client = new cote.Requester({name: 'Contact client'});

client.send({
	type: 'add',
	name: 'YOUR_NAME_HERE' // << write your name there
}).then(console.log).catch(console.log);

// get all data send to server
// client.send({type: 'getall'}).then(console.log).catch(console.log);