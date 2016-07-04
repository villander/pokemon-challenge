import { extractIdUrl } from 'pokemon-challenge/helpers/extract-id-url';
import { module, test } from 'qunit';

module('Unit | Helper | extract id url');

test('it returns the empty id if url is null', (assert) => {
  let result = extractIdUrl([null]);
  assert.strictEqual(result, '', 'Result of null should be empty');
});

test('it return the id via a endpoint ', (assert) => {
	let result = extractIdUrl(['http://pokeapi.co/api/v2/ability/34/']);
	assert.strictEqual(result, '34');
});
