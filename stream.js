let fs = require('fs')
let file = 'demo.mp4'

let read = fs.createReadStream(file)
let write = fs.createWriteStream('copy.mp4')

fs.stat(file, (err,stat) => {

    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("j'ai lu " + Math.round(100 * progress / total) + "%")
    })
    
    //tres utile pour des donnés volumineuses pour pas bloquer la memoire
    read.pipe(write)
    write.on('finish', ()=> {
        console.log("le fichier a bien été copié")
    })
})

//solution trop lourde en ressources
// fs.readFile('demo.mp4', (err, data)=> {
//     if(err) throw err
//     fs.writeFile('copy.mp4', data, (err) => {
//         if(err) throw err
//         console.log('le fichier a bien ete copié')
//     })
// })