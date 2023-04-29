const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('A Big Hello from App1!');
});

app.listen(port, () => {
    console.log(`App1 listening at http://localhost:${port}`);
});