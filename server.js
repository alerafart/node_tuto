// let demo = require('./hello')

const { request } = require('http')

// demo.hello()
// let _ = require('lodash')
// let map = require('lodash/map') // on peut aussi inclure seulement une fonctionalité de lodash et non la totalité

// console.log(_.map([1,2,3], function(n) { return n * 3; }));
// let app = require('./app').start(8080)

// app.on('root', function(response) {
//     response.write("je suis à la racine server")
// })

//express*
// let express = require('express')
// let app = express()

//alternative en une ligne aux 2 precedentes
let app = require('express') ()
app.get('/' , (request, response) => {
    response.send('salut express tu est à la racine')
})

app.get('/demo' , (request, response) => {
    response.send('salut tu est sur la demo')
})

app.listen(8080)
