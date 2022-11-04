// let hello = () => {
//     console.log('salu cavache')
// }

let hello = function()  {
    console.log('salu cavache')
}

exports.hello = hello

//alternative export directement dans la declaration
exports.hellooo = function()  {
    console.log('salutttt cavache')
}

// module.exports = {
//     hello : hello
// }
