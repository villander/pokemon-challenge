import Ember from 'ember';

const {
  Route,
  $,
  run,
  RSVP
} = Ember;

export default Route.extend({
  nextRequest: '',
  redirect() {
    this.replaceWith('pokemons');
  },
  model() {
    return this.getPokemons("https://pokeapi.co/api/v2/pokemon/");
  },
  getPokemons(url) {
    return new RSVP.Promise((resolve, reject) => {
      $.getJSON(url).then((data) => {
          this.set('nextRequest', data.next);
          const results = data.results;
          run(() => {
            this.get('store').pushPayload('result', { results });
            const pokemons = this.get('store').peekAll('result');
            resolve(pokemons);
          });
        }, (jqXHR) => {
          run(() => reject(jqXHR));
        });
    });
  },
  actions: {
    getMorePokemons() {
      if (this.get('nextRequest')) {
        this.getPokemons(this.get('nextRequest'));
      }
    }
  }
});
