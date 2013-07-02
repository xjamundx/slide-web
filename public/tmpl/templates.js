this["JST"] = this["JST"] || {};

this["JST"]["public/tmpl/deck.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#decks/' +
((__t = (id)) == null ? '' : __t) +
'">\n\t<article class="deck">\n\t\t<h2>' +
((__t = (title)) == null ? '' : __t) +
'</h2>\n\t\t<div class="r sub">' +
((__t = (author)) == null ? '' : __t) +
'</div>\n\t</article>\n</a>\n';

}
return __p
};

this["JST"]["public/tmpl/slide.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#slides/' +
((__t = (deckId)) == null ? '' : __t) +
'/' +
((__t = (num)) == null ? '' : __t) +
'">\n<article class="slide">\n\t';
if (typeof img != 'undefined') { ;
__p += '\n\t\t<img src="' +
((__t = (img)) == null ? '' : __t) +
'" class="slide-thumb">\n\t';
 } ;
__p += '\n\t<h2 class="slide-title">' +
((__t = (title)) == null ? '' : __t) +
'</h2>\n</article>\n</a>\n';

}
return __p
};