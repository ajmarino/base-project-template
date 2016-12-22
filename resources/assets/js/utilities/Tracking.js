/**
 * Provides tracking events for Google Analytics
 */
module.exports = {

	/**
	 * Sends a tracking event for user interaction
	 * 
	 * @param  {string}  category - object that was interacted with
	 * @param  {string}  action   - type of interaction
	 * @param  {string}  label    - grouping label
	 * @param  {integer} value    - numeric value associated with event
	 */
	event(category, action, label, value) {
		label = (typeof label === undefined ) ? '' : label;
		value = (typeof value === undefined ) ? '' : value;

		ga('send', 'event', category, action, label, value);
	},





	/**
	 * Sends a tracking event for social interaction
	 * 
	 * @param  {string} network - specific network
	 * @param  {string} action  - type of action that occured
	 * @param  {string} target  - target of social interaction
	 */
	social(network, action, target) {
		ga('send', 'social', network, action, target)
	}
};