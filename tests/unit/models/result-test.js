import { moduleForModel, test } from 'ember-qunit';

moduleForModel('result', 'Unit | Model | result', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it has the attribute name', function(assert) {
  const model = this.subject();
  const hasAttrName = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttrName);
});

