import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('pokemons', function() {
    this.route('single', { path: '/:name' });
  });
});

export default Router;
