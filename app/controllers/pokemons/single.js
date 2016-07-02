import Ember from 'ember';


export default Ember.Controller.extend({

  actions: {

    createComment() {
      // Create the comment
      var newComment = this.get('store').createRecord('comment', {
        name: 'Michae',
        email: 'nousvillander@gmail.com',
        message: 'My awesome new comment'
      });

      var newPokemon = this.get('store').createRecord('pokemon', {
        pokemonId: this.get('model.pokemon.id')
      });

      newPokemon.get('comments').addObject(newComment);

      // Save the comment, then save the post
      newComment.save().then(function () {
        return newPokemon.save();
      });
    }

  }
});