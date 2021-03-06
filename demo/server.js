const cote = require('cote');
const client = new cote.Responder({name: 'Message server'});

const data = [];

client.on('add', function (req, cb) {
	data.push(req);
	console.log('add', req);

	const name = req.name || 'one without no name';
	cb({
		'message': `Hei ${name} your message has been added! There are now total ${data.length} messages in my database`
	});
});

client.on('getall', function (req, cb) {
	console.log('getall', req);
	cb(data);
});