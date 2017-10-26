# Demo

Before you start make sure you have required tools installed:
 * [node](https://nodejs.org/en/) - JavaScript run-time environment for executing JavaScript server-side
 * [npm](https://www.npmjs.com/) - JavaScript package manager
 * Any [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) to edit source code for your app (if you have none, try [Atom](https://atom.io/))

## Create app

Create new directory for your app
``` bash
mkdir mytestapp
cd mytestapp
```

Use [npm](https://www.npmjs.com/) to install [cote](https://github.com/dashersw/cote)
``` bash
npm install cote
```

Create your app using your favorite [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment), lets name it `client.js`.
``` javascript
const cote = require('cote');

const client = new cote.Requester({name: 'Contact client'});

client.send({
	type: 'add',
	name: 'YOUR_NAME_HERE' // << write your name there
}).then(console.log).catch(console.log);
```

And then run your app using [node](https://nodejs.org/en/)
``` bash
node client.js
```