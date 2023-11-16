const express = require('express');
const cors = require('cors');
const stadiumRouter = require('./routes/stadium.routes');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.json())
app.use(cors())
app.use('/api', stadiumRouter);


app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:%s`, PORT);
});
