const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello, world!\n');
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}!`)
})
