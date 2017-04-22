import Ember from 'ember';
import fetch from 'ember-network/fetch';

const {
  Route,
  run
} = Ember;

export default Route.extend({
  nextRequest: '',
  model() {
    return this._getPokemons('https://pokeapi.co/api/v2/pokemon');
  },
  _getPokemons(url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.set('nextRequest', data.next);
        const { results } = data;
        this.get('store').pushPayload('result', { results });
        const pokemons = this.get('store').peekAll('result');
        return pokemons;
      })
      .catch((error) => {
        run(() => error);
      });
  },
  actions: {
    getMorePokemons() {
      if (this.get('nextRequest')) {
        this._getPokemons(this.get('nextRequest'));
      }
    }
  }
});
