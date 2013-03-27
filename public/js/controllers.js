function DeckListCtrl($scope, $Decks, $rootScope) {

  // *****************************************************
  // $scope variables and methods
  // *****************************************************

  $scope.decks = [ ];

  $scope.doLoad = function () {
    $Decks.query().then(function(response){
      $scope.decks = response;  
    });
  }

  $scope.doLoad();
};
function DeckDetailCtrl($scope, $Decks, $routeParams, $rootScope) {

  // *****************************************************
  // $scope variables and methods
  // *****************************************************
  $scope.deck = {};
  $scope.deckId = $routeParams.deckId;

  $scope.doLoad = function (deckId) {
    $Decks.get(deckId).then(function(response){
      $rootScope.pageTitle = response.title;
      $scope.deck = response;
    });
  }
  
  $scope.doLoad($routeParams.deckId);
};
function SlideDetailCtrl($scope, $Decks, $routeParams, $rootScope) {

  // *****************************************************
  // $scope variables and methods
  // *****************************************************
  $scope.slide = {};
  $scope.deckId = $routeParams.deckId;
  $scope.slideId = $routeParams.deckId;
  $scope.doLoad = function (deckId, slideId) {
    $Decks.get(deckId).then(function(response){
      var deck = response;
      $scope.slide = deck.slides[slideId];
      $rootScope.pageTitle = $scope.slide.title;
    });
  }
  $scope.doLoad($routeParams.deckId, $routeParams.slideId);
};