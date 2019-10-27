const express = require('express');
const pen = require('chalk');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello Demystify Technology!!!');
});

app.listen(port, () => console.log(`Demystify Cool App is running on port ${pen.green(port)})`));