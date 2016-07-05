import { height } from 'pokemon-challenge/helpers/height';
import { module, test } from 'qunit';

module('Unit | Helper | height');

test('converts input to meters and adds units', function(assert) {
  assert.expect(1);
	let result = height([42]);
	assert.strictEqual(result, '4.2 m');
});

test('rounds the height to one decimal place', function(assert) {
  assert.expect(1);
	let result = height([4.1931]);
	assert.strictEqual(result, '0.4 m');
});

test('always displays one decimal place, even if digit is 0', function(assert) {
  assert.expect(1);
	let result = height([50]);
	assert.strictEqual(result, '5.0 m');
});
