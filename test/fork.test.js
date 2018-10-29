/* eslint-disable
  import/order,
  comma-dangle,
  arrow-parens,
  linebreak-style,
  prefer-destructuring,
  no-underscore-dangle,
  array-bracket-spacing,

*/
import assert from 'assert';
import webpack from './helpers/compiler';

test('if fork really works', () =>
  webpack('fork', {
    target: 'node',
    loader: {
      test: /worker\.js$/,
      options: {
        publicPath: './test/__expected__/fork/'
      }
    }
  }).then((stats) => {
    assert.equal(stats.compilation.missingDependencies.length, 0);
    // eslint-disable-next-line
    const fn = require('./__expected__/fork/bundle.js');
    return fn();
  }).then((t) => {
    assert.equal(t, 'it works');
  })
);
