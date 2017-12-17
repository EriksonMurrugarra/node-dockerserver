'use strict';

const express = require('express');

const PORT = 8000;
const app = express();

app.get('/', (req, res) => { 
	res.send('Hello World again\n');
});

app.listen(PORT);

console.log(`running on port ${PORT}`);
