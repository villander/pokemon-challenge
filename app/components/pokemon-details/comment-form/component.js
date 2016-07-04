import Ember from 'ember';

const {
  Component,
  computed,
  run,
  setProperties
} = Ember;

export default Component.extend({
  isValidName: computed.notEmpty('name'),
  isValidEmail: computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: computed.gte('message.length', 5),
  isValidEmailAndMessage: computed.and('isValidEmail', 'isMessageEnoughLong'),
  isValid: computed.and('isValidEmailAndMessage', 'isValidName'),

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
          }, 500);
        });

      setProperties({
        emailAddress: '',
        name: '',
        message: '',
        responseMessage: false
      });
    }
  }
});
