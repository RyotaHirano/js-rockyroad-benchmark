const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const func = require('.././js-rockyroad/question/invert-key-value');

suite.add('func', () => {
  func({
    value: 0,
    10: 'id',
    total: 100,
    taro: 'name'
  });
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
