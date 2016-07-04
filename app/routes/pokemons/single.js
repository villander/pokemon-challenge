import Ember from 'ember';

const {
  Route,
  $,
  RSVP
} = Ember;

export default Route.extend({
  model(params) {
    const comments = this.get('store').query('pokemon', { orderBy: 'pokemonId', equalTo: params.id })
      .then((pokemonArray) => {
        if (pokemonArray.get('length')) {
          return pokemonArray.get('firstObject.comments');
        } else {
          // if not exist, save the pokemon as reference in firebase
          return this.savePokemon(params.id);
        }
      });
      
    const foundPokemon = this.get('store').peekRecord('pokemontmp', params.id);
    let pokemon;

    if (foundPokemon) {
      pokemon = foundPokemon;
    } else {
      pokemon = $.getJSON(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((data) => {
          const pokemonData = {
            pokemontmp: [{
              id: data.id,
              name: data.name,
              stats: data.stats,
              height: data.height,
              weight: data.weight,
              sprites: data.sprites,
              base_experience: data.base_experience
            }]
          };
          this.get('store').pushPayload('pokemontmp', pokemonData);
          return this.get('store').peekRecord('pokemontmp', data.id);
        });
    }

    return RSVP.hash({ pokemon, comments });
  },
  savePokemon(pokemonId) {
    const pokemon = this.get('store').createRecord('pokemon', { pokemonId });
    return pokemon.save().then(() => {
      return pokemon.get('comments');
    });
  },
  actions: {
    createComment(pokemon, name, email, message) {
      const newComment = this.get('store').createRecord('comment', { name, email, message });
      const pokemonId = pokemon.get('id');

      return this.get('store').query('pokemon', { orderBy: 'pokemonId', equalTo: pokemonId })
        .then((pokemonArray) => {
          const pokemonCommented = pokemonArray.get('firstObject');
          pokemonCommented.get('comments').addObject(newComment);

          // Save the comment, then save the pokemon
          return newComment.save().then(() => {
            return pokemonCommented.save();
          });
        });
    }
  }
});
