import Ember from 'ember';

export function weight([modelWeight]/*, hash*/) {
	var weightInKg = (modelWeight / 10).toFixed(1);
	return weightInKg + " kg";
}

export default Ember.Helper.helper(weight);
