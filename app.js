const express = require('express');
const stadiumRouter = require('./routes/stadium.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', stadiumRouter);

app.use("/js", express.static(__dirname + "/js"));

app.use("/style.css", express.static(__dirname + "/style.css"));

app.get("", (req, res) => {
    res.sendFile(__dirname +'/main.html');
});

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:%s`, PORT);
});
