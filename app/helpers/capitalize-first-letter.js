import Ember from 'ember';

export function capitalizeFirstLetter([string]/*, hash*/) {
  if (!string || !string.length) {
		return '';
	}
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Ember.Helper.helper(capitalizeFirstLetter);
