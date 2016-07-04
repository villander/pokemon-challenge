import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const {
  compare
} = Ember;

moduleForComponent('search-box', 'Unit | Component | search box', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

const modelStub = [
  Ember.Object.create({ id: 1, name: 'Venonat' }),
  Ember.Object.create({ id: 2, name: 'Pichu' }),
  Ember.Object.create({ id: 3, name: 'Palkia' })
];

test('filteredPokemons contains the pokemons sorted by name', function (assert) {
  assert.expect(2);

  let component = this.subject();

  component.set('pokemons', modelStub);
  component.set('query', 'Veno');

  assert.equal(component.get('filteredPokemons.firstObject.id'), 1);
  assert.equal(component.get('filteredPokemons.firstObject.name'), 'Venonat');
});

test('filteredPokemons contains all pokemons when query is empty', function (assert) {
  assert.expect(1);

  let component = this.subject();

  component.set('pokemons', modelStub);
  component.set('query', '');
  assert.deepEqual(compare(component.get('filteredPokemons'), modelStub), 0, 'Result of empty should be all pokemons');
});
