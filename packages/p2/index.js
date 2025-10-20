const add = require('p1')
const div = require('p3')

function result(n1,n2){
    return add(n1,n2) - div(n2)
}
module.exports = result