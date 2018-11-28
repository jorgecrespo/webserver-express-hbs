var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear()
    })
})


app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port)
})