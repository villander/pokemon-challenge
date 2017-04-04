import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const {
  get
} = Ember;

moduleForModel('pokemon', 'Unit | Model | pokemon', {
  // Specify the other units that are required for this test.
  needs: ['model:comment']
});


test('shoud has a relationship with comment', function(assert) {
  assert.expect(2);

  const model = this.store().modelFor('pokemon');
  const relationship = get(model, 'relationshipsByName').get('comments');

  assert.equal(relationship.key, 'comments', 'has relationship with comment');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
