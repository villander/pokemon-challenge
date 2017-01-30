import { test } from 'qunit';
import moduleForAcceptance from 'pokemon-challenge/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon list');

test('visiting /pokemon-list', function (assert) {
  visit('/pokemons');

  andThen(function () {
    assert.equal(currentURL(), '/pokemons');
  });
});


test('should list pokemons', function (assert) {
  visit('/pokemons');
  andThen(() => {
    assert.strictEqual(
      find('.search-box--pokemon-list .list-group-item:eq(0)').text().trim(),
      'bulbasaur',
      'The pokemon is returned of API'
    );
  });
});
