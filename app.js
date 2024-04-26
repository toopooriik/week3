const express = require('express');
const path = require('path');
const { mainRoute, gamesRouter } = require('./routes');
const cors = require('./middlewares');

const app = express();
const PORT = 3000

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
