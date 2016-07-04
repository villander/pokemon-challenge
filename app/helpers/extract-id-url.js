import Ember from 'ember';

export function extractIdUrl([url]/*, hash*/) {
  if (!url || !url.length) {
		return '';
	}
  return url.split('/')[url.split('/').length - 2];
}

export default Ember.Helper.helper(extractIdUrl);
