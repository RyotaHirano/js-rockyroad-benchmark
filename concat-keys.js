const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const func = require('.././js-rockyroad/question/concat-keys');

suite.add('func', () => {
  func([
    {
      animal: 'dog',
      fruits: {
        red: 'apple',
        yellow: 'banana'
      }
    },
    {
      fruits: 'strawberry'
    },
    {
      animal: 'cat',
      fruits: {
        pink: 'peach'
      },
      color: 'yellow'
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
