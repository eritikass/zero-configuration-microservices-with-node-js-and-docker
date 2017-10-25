const cote = require('cote');

const client = new cote.Requester({name: 'Contact client'});

client.send({type: 'add', contact: {
	'name': 'siim',
	'location': 'Estonia'
}});

client.send({type: 'find all'}).then(console.log).catch(console.warn);