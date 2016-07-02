import Ember from 'ember';

const {
  Route,
  $,
  set
} = Ember;

export default Route.extend({
  redirect() {
    this.replaceWith('pokemons');
  },
  model() {
    return this.getAllPokemons("https://pokeapi.co/api/v2/pokemon/");
    //return this.store.findAll('pokemon');
  },
  getAllPokemons(url) {
    return $.getJSON(url)
      .then((data) => {
        set(this, 'nextRequest', data.next);
        const results = data.results;
        this.store.pushPayload('result', { results });
        return this.store.peekAll('result');
        // something that handles success
      }, (error) => {
        // something that handles failures
        throw error;
      });
  }
});
