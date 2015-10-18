const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const func = require('.././js-rockyroad/question/get-num-4math-operate');

suite.add('func', () => {
  func(0, {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [2, 3]
  });
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
