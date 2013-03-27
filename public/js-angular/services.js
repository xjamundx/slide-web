/*angular.module('slidewebServices', ['ngResource']).
  factory('$Decks', function($resource){
  return $resource('decks', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});*/
angular.module('slidewebServices', []).
  factory('$Decks', function($http){
  return {
  	query: function () {
  	  return $http.get('/decks', {}).then( function (response) {
  	  	self.data = response.data;
  	  	return response.data;
  	  });
  	},
  	get: function (id) {
  	  return $http.get('/decks', {}).then( function (response) {
  	  	return response.data[id] ? response.data[id] : {};
	  });
  	}
  }
});