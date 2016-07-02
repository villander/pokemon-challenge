import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:pokemon']
});

test('it exists', function(assert) {
  let model = this.subject();
  console.log(model);
  // let store = this.store();
  assert.ok(!!model);
});
