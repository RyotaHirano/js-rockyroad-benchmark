const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const func = require('.././js-rockyroad/question/get-maxid-plusone');

suite.add('func', () => {
  func([
    {
      id: 2,
      name: 'other'
    },
    {
      id: 10,
      name: 'other'
    },
    {
      id: 4,
      name: 'other'
    }
  ]);
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
