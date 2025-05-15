let events = require('events')
const util = require('util')


const teams = function(name){
    this.name = name
}
// eventEmitter will inherit any teams construct
util.inherits(teams, events.EventEmiter)
const Barcelona = new teams('Milan')
//Save each constructor as an array
const teamsArray =[Barcelona, Milan]
//Print eacg tea, using forEachloop
teamsArray.forEach((t)=>{
    t.on('nation', function(n){
        console.log(`${t.name} + 'is' ${n} football club!`)
    })
})

Milan.emit('nation','Italian')


/*
let eventEmitter = new events.EventEmitter();
eventEmitter.on('test', function(a){
    console.log(a)
})
eventEmitter.emit('test', 'EVENTS IN NODEJS') */
