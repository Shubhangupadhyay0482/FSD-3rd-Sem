const EventEmitter=require('events');
const myEmitter= new EventEmitter();
myEmitter.on('login', (name)=>{
    console.log('$(name) Logged in successfully');
});
myEmitter.on('message', (msg)=>{
    console.log('Message event received: $(msg)');
});
myEmitter.emit('login','Shubh');
myEmitter.emit('message','Welcome to node.js');

