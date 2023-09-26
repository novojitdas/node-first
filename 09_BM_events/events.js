// events (built-in-module) returns a class
const EventEmitter = require('node:events');
// created an object for emitting events
const emitter = new EventEmitter();

// define custom events using the on method 
// to specify what should happen when that EVENT OCCURS
// emitter.on(event-name, CallbackFn);
emitter.on('order-pizza', (size,toppings) => {
      console.log(`Received Your Order: ${size} Pizza with ${toppings}`);
});
// We can create multiple event for an event-trigger/emit/call
emitter.on('order-pizza', (size) => {
      if(size === 'large'){
      console.log(`You have received a 10% discount coupon`);
      }
});

// to emit/CALL A EVENT, we use emit method, 
// this method accepts event-name as argument
// emitter.emit('event-name','rest-arguments');
emitter.emit('order-pizza',"large","chicken");
