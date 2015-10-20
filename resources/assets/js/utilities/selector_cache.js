/**
 * Creates a cache of jQuery selectors for faster processing
 *
 * http://ttmm.io/tech/selector-caching-jquery/
 * https://gist.github.com/jtsternberg/14978579a9edf42ed069
 *
 * @returns {function} allows storing of selectors in cache
 */
module.exports = function () {
	var elementCache = {};
 
	var get_from_cache = function( selector, $ctxt, reset ) {
 
		if ( 'boolean' === typeof $ctxt ) { reset = $ctxt; }
		var cacheKey = $ctxt ? $ctxt.selector + ' ' + selector : selector;
 
		if ( undefined === elementCache[ cacheKey ] || reset ) {
			elementCache[ cacheKey ] = $ctxt ? $ctxt.find( selector ) : jQuery( selector );
		}
 
		return elementCache[ cacheKey ];
	};
 
	get_from_cache.elementCache = elementCache;
	
	return get_from_cache;
};