import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-details/comment-form', 'Integration | Component | pokemon details/comment form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokemon-details/comment-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokemon-details/comment-form}}
      template block text
    {{/pokemon-details/comment-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
