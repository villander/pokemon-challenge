import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  pokemonId: attr('string'),
  comments: hasMany('comment', { async: true })
});
