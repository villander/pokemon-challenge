import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  stats: attr(),
  height: attr('string'),
  weight: attr('string'),
  sprites: attr(),
  base_experience: attr('string')
});
