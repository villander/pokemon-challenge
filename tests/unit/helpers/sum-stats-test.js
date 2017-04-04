import { sumStats } from 'pokemon-challenge/helpers/sum-stats';
import { module, test } from 'qunit';

module('Unit | Helper | sum stats');

test('it sums the base stats', (assert) => {
	assert.expect(1);

	let stats = [
		{ base_stat: 6 },
		{ base_stat: 6 }
	];

	let result = sumStats([stats]);
	assert.equal(result, 12);
});
