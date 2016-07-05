import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('pokemon-details/comment-list', 'Integration | Component | pokemon details/comment list', {
  integration: true
});

const stubComment = [{
  name: 'James Bond',
  email: 'bond@gmail.com',
  message: 'Hello guys',
  createdAt: new Date()
}];

test('should be rendered comments with name, message and date', function (assert) {
  assert.expect(4);

  this.set('comments', stubComment);

  this.render(hbs`{{pokemon-details/comment-list comments=comments}}`);

  assert.equal(this.$().length, 1);
  assert.equal(this.$().find('.comment-name').text().trim(), 'James Bond');
  assert.equal(this.$().find('.comment-message').text().trim(), 'Hello guys');
  assert.equal(this.$().find('.comment-date').text().trim(), `on ${moment(stubComment[0].createdAt).format('YYYY-MM-DD HH:mm')}`);
});
