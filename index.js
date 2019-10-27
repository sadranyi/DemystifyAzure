const express = require('express');
const chalk  = require('chalk');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello World');
    res.end();
});

app.listen(port, ()=>{console.log(`${chalk.blue('App')} is running on port ${chalk.green(port)}`)});