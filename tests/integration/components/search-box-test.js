import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-box', 'Integration | Component | search box', {
  integration: true
});

test('should be rendered a message when has not Pokemons', function (assert) {
  assert.expect(1);

  this.set('pokemons', []);

  this.render(hbs`{{search-box pokemons=pokemons}}`);

  let $component = this.$('.search-box');
  assert.equal($component.find('.message-search').text().trim(), 'No pokémon found');
});
