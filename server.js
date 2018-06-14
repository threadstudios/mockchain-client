const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(process.env.PORT || 3450);