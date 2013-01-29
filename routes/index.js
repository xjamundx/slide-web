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

exports.addSlide = function(req, res) {
  var deckId = req.params.id,
      newSlide = decks[deckId].slides.push({
        title: unescape(req.body.title) || 'New slide',
        img: unescape(req.body.img) || 'http://farm8.staticflickr.com/7271/7588148580_89b3b0968c_m.jpg'
      });
  res.json({ result: true, deckId: deckId, slideId: newSlide - 1 });
}

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
