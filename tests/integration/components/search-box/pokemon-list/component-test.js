import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('search-box/pokemon-list', 'Integration | Component | search box/pokemon list', {
  integration: true
});

const pokemonStub = [
  Ember.Object.create({
    id: 1,
    name: 'Pokemon1'
  })
];
test('renders pokemons', function (assert) {
  assert.expect(2);

  this.set('pokemons', pokemonStub);

  this.render(hbs`{{search-box/pokemon-list pokemons=pokemons}}`);

  let $component = this.$('.list-group');
  assert.equal($component.length, 1);
  assert.equal($component.text().trim(), 'Pokemon1');
});

test('should trigger external action on end scroll', function (assert) {
  assert.expect(1);

  this.set('pokemons', pokemonStub);

  this.on('externalAction', () => {
    const fired = true;
    assert.equal(fired, true, 'called the external action');
  });

  this.render(hbs`{{search-box/pokemon-list pokemons=pokemons loadMorePokemons=(action 'externalAction')}}`);

  let $component = this.$('.list-group');
  assert.equal($component.text().trim(), 'Pokemon1');
  $component.height(30);
  $component.scrollTop($component.prop('scrollHeight'));
});


