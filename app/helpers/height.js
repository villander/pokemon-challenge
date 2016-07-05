import Ember from 'ember';

export function height([modelHeight]/*, hash*/) {
	var heightInMeters = (modelHeight / 10).toFixed(1);
	return heightInMeters + " m";
}

export default Ember.Helper.helper(height);
