import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['search-box', 'col-md-3'],
  filteredPokemons: computed('pokemons', 'query', function () {
    let pokemons = this.get('pokemons');
    if (this.get('query')) {
      return pokemons.filter((pokemon) => {
        return pokemon.get('name').toLowerCase().indexOf(this.get('query').toLowerCase()) !== -1;
      });
    } else {
      return pokemons;
    }
  }),
  actions: {
    clearSearch() {
      this.set('query', '');
    }
  }
});
