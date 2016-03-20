// Reactive programming - mainly programming with event streams
// Event streams are a sequence of events happening over time
// Like an async array

const Rx = require('rxjs-es/Rx')

const source = Rx.Observable.interval(400).take(9)
  .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

const result = source;

result.subscribe(x => console.log(x));
