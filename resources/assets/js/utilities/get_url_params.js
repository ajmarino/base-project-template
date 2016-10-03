/**
 * Fetches url params 
 *
 * @link https://davidwalsh.name/query-string-javascript
 * 
 * @param  {string} name - param to fetch
 *
 * @example
 *   http://test.com/?page=something
 *   
 *   var page = Util.getUrlParam('page');
 *   
 */
module.exports = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};