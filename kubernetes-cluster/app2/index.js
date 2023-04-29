const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000');
        res.send(`Hello from App2! App1 says: "${response.data}"`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to App1');
    }
});

app.listen(port, () => {
    console.log(`App2 listening at http://localhost:${port}`);
});