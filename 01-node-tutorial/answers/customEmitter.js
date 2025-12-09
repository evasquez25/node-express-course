const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('SayHello', () => {
    console.log('Hey there!')
})
emitter.emit('SayHello')

emitter.on('Greet', (name) => {
    console.log(`How are you, ${name}?`)
})
emitter.emit('Greet', 'Eric')
