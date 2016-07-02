import Ember from 'ember';

export function sumStats([stats]/*, hash*/) {
  return stats.reduce((sum, stat) => sum + stat.base_stat, 0);
}

export default Ember.Helper.helper(sumStats);
