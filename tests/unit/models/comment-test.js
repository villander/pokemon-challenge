import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:pokemon']
});

test('it has the attributes: name, email, pokemon, message, createAt', function(assert) {
  assert.expect(5);

  const model = this.subject();

  const hasAttrName = Object.keys(model.toJSON()).indexOf('name') > -1;
  const hasAttrEmail = Object.keys(model.toJSON()).indexOf('email') > -1;
  const hasAttrPokemon = Object.keys(model.toJSON()).indexOf('pokemon') > -1;
  const hasAttrMessage = Object.keys(model.toJSON()).indexOf('message') > -1;
  const hasAttrCreatedAt = Object.keys(model.toJSON()).indexOf('createdAt') > -1;

  assert.ok(hasAttrName);
  assert.ok(hasAttrEmail);
  assert.ok(hasAttrPokemon);
  assert.ok(hasAttrMessage);
  assert.ok(hasAttrCreatedAt);
});
