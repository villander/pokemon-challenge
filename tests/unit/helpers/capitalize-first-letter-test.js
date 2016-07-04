import { capitalizeFirstLetter } from 'pokemon-challenge/helpers/capitalize-first-letter';
import { module, test } from 'qunit';

module('Unit | Helper | capitalize first letter');

test('it returns the empty string if input is null', (assert) => {
  let result = capitalizeFirstLetter([null]);
  assert.strictEqual(result, '', 'Result of null should be empty');
});

test('it capitalizes the first letter of the string', (assert) => {
	let result = capitalizeFirstLetter(['pokemon']);
	assert.strictEqual(result, 'Pokemon');
});
