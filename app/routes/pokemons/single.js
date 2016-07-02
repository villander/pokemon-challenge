import Ember from 'ember';

const {
  Route,
  $,
  RSVP
} = Ember;

export default Route.extend({
  model(params) {
    const comments = this.get('store').query('pokemon', { orderBy: 'pokemonId', equalTo: '2' })
      .then((pokemon) => {
        return pokemon.get('firstObject.comments');
      });
    const foundPokemon = this.get('store').peekAll('pokemontmp').findBy('name', params.name);
    let pokemon;
    if (foundPokemon) {
      pokemon = foundPokemon;
    } else {
      pokemon = $.getJSON(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((data) => {
          const pokemonData = {
            pokemontmp: [{
              id: data.id,
              name: data.name,
              stats: data.stats,
              height: data.height,
              weight: data.weight,
              sprites: data.sprites
            }]
          };
          this.get('store').pushPayload('pokemontmp', pokemonData);
          return this.get('store').peekRecord('pokemontmp', data.id);
        });
    }
    return RSVP.hash({ pokemon, comments });
  }
});
