//npm install express
//npm install --save-dev mocha
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ласкаво просимо до мого додатку!');
});

app.post('/fork', (req, res) => {
    try {
        res.send('Репозиторій успішно форкнутий!');
    } catch (error) {
        res.status(500).send('Помилка при форку репозиторію: ' + error.message);
    }
});

app.post('/pull-request', (req, res) => {
    try {
        res.send('Пул-реквест успішно створений!');
    } catch (error) {
        res.status(500).send('Помилка при створенні пул-реквесту: ' + error.message);
    }
});

app.listen(3005, () => {
    console.log('Сервер запущено на порті 3005');
});

module.exports = app;
