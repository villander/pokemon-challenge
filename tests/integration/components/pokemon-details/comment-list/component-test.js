import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-details/comment-list', 'Integration | Component | pokemon details/comment list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokemon-details/comment-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokemon-details/comment-list}}
      template block text
    {{/pokemon-details/comment-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
