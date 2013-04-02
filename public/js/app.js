var app = angular.module('slideweb', ['slidewebServices', 'pageService']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/decks', {templateUrl: 'partials/deck-list.html',   controller: DeckListCtrl}).
      when('/decks/:deckId', {templateUrl: 'partials/deck-detail.html', controller: DeckDetailCtrl}).
      when('/slide/:deckId/:slideId', {templateUrl: 'partials/slide.html', controller: SlideDetailCtrl}).
      otherwise({redirectTo: '/decks'});
}]);

app.run(function($rootScope, Page){
    $rootScope.Page = Page;
});