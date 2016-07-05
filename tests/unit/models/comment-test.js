import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const {
  get
} = Ember;

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:pokemon']
});

test('shoud has a relationship with pokemon', function(assert) {
  assert.expect(2);

  const model = this.store().modelFor('comment');
  const relationship = get(model, 'relationshipsByName').get('pokemon');

  assert.equal(relationship.key, 'pokemon', 'has relationship with pokemon');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
