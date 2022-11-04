let http = require('http') 

let fs = require('fs')
let url = require('url')

const EventEmitter = require('events')

//class
let App = {
    start: function(port) {
        let emmiter = new EventEmitter()
        let server = http.createServer((request, response) => {

            response.writeHead(200)

            if(request.url == '/') {
                emmiter.emit('root', response)
            }

            response.end()

        }).listen(port)

        return emmiter
    }
}

let app = App.start(8080)

app.on('root', function(response) {
    response.write("je suis à la racine")
})

// let server = http.createServer();

// server.on('request', (req, res) => {
    
//     res.writeHead(200)
//     let query = url.parse(req.url, true).query
//     let name = query.name === undefined? 'anonyme' : query.name

//     // if(query.name=== undefined) {
//     //     res.write('bonjour anonyme')
//     // } else {
//     //     res.write('bonjour ' + query.name)
//     // }
//     // res.end() //fin de la connexion

//     //on remplace l'exemple dessus par ceci qui remplace le name dans notre html
//     fs.readFile('index.html', 'utf8', (err,data) => { 
//         //si pas d'encodage precisé dans readFile cela renvoi un buffer, 
//         //(objet particulier de nodejs)
//         //si on rajoute utf8 en 2eme param, cela renvoi une chaine de caracteres
//         if(err) {
//             res.writeHead(404)
//             res.end('fichier inexistante')
//         }
//         else {
//         res.writeHead(200, {
//             'Content-type': 'text/html; charset=utf-8'
//           })
//           data = data.replace('{{ name }}', name)
//           res.end(data)
//         }
//     })

// })
// server.listen(8080)