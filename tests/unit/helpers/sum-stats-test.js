import { sumStats } from 'pokemon-challenge/helpers/sum-stats';
import { module, test } from 'qunit';

module('Unit | Helper | sum stats');

test('it sums the base stats', function(assert) {
  let stats = [{
		base_stat: 3
	},
	{
		base_stat: 8
	}];
	let result = sumStats([stats]);
 	assert.equal(result, 11);
});
