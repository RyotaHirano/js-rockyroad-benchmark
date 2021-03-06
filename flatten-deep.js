const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const func = require('.././js-rockyroad/question/flatten-deep');

suite.add('func', () => {
  func([
    [2, [3, 5], ''],
    [4, 5, [7, 8], [[[' ']]], [undefined, [[{}]]]],
    [1, [[4, false]], true, null]
  ]);
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
