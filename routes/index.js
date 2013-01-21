var decks = require("../model/deck");
var prez = require("../model/pres");
var _ = require("underscore");

exports.prez = function(req, res) {
  res.json(prez);
};

exports.pres = function(req, res) {
  var id = req.params.id;
  res.json(prez[id]);
};

exports.decks = function(req, res) {
  res.json(decks);
};

exports.deck = function(req, res) {
  var id = req.params.id;
  res.json(decks[id]);
};

exports.slide = function(req, res) {
  var id = req.params.id;
  var num = req.params.num;
  var slide = _.clone(decks[id]);
  slide.slides = [slide.slides[num]];
  res.json(slide);
};

exports.add_new_deck = function(req, res){
    var newID = decks.length;
    decks.push({
        id: newID,
        title: (unescape(req.body.name) || 'New Deck'),
        author: (unescape(req.body.author) || 'Jamund Ferguson'),
        slides: []
    });
    res.json({result:true, msg:'Deck added!', id: newID});
}
