import Ember from 'ember';

const {
  Route,
  $,
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
    return $.getJSON(url)
      .then((data) => {
        this.set('nextRequest', data.next);
        const results = data.results;
        this.get('store').pushPayload('result', { results });
        return this.get('store').peekAll('result');
      }, (error) => {
        throw error;
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
