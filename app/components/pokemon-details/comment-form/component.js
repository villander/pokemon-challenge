import Ember from 'ember';

const {
  Component,
  computed,
  run
} = Ember;

export default Component.extend({
  isValidName: computed.notEmpty('name'),
  isValidEmail: computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: computed.gte('message.length', 5),
  isValidEmailAndMessage: computed.and('isValidEmail', 'isMessageEnoughLong'),
  isValid: computed.and('isValidEmailAndMessage', 'isValidName'),

  rollBackAttributes() {
    this.setProperties({
      emailAddress: '',
      name: '',
      message: '',
      responseMessage: false
    });
  },

  actions: {
    sendComment() {
      const pokemon = this.get('pokemon');
      const email = this.get('emailAddress');
      const message = this.get('message');
      const name = this.get('name');

      this.get('sendComment')(pokemon, name, email, message)
        .then(() => {
          this.set('responseMessage', true);
          run.later(() => {
            this.$('#comment-form-modal').modal('hide');
            this.rollBackAttributes();
          }, 500);

        });

    },
    close() {
      this.rollBackAttributes();
      this.$('#comment-form-modal').modal('hide');
    }
  }
});
