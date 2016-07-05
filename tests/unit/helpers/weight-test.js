import { weight } from 'pokemon-challenge/helpers/weight';
import { module, test } from 'qunit';

module('Unit | Helper | weight');

test('converts input to kilograms and adds units', function(assert) {
  assert.expect(1);
	let result = weight([42]);
	assert.strictEqual(result, '4.2 kg');
});

test('rounds the weight to one decimal place', function(assert) {
  assert.expect(1);
	let result = weight([4.1931]);
	assert.strictEqual(result, '0.4 kg');
});

test('always displays one decimal place, even if digit is 0', function(assert) {
  assert.expect(1);
	let result = weight([50]);
	assert.strictEqual(result, '5.0 kg');
});
