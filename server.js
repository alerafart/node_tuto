// let demo = require('./hello')

// demo.hello()

let app = require('./app').start(8080)

app.on('root', function(response) {
    response.write("je suis à la racine server")
})