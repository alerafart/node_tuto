
let url = require('url')
let http = require('http') 
let fs = require('fs')
const EventEmitter = require('events')

let App = {
    start: function(port) {
        let emmiter = new EventEmitter()
        let server = http.createServer((request, response) => {

            response.writeHead(200, {
                'Content-type' : 'text/html; charset=utf-8'
            })

            if(request.url == '/') {
                emmiter.emit('root', response)
            }

            response.end()

        }).listen(port)

        return emmiter
    }
}

module.exports = App