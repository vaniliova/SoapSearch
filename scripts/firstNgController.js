angular
  .module('FirstNgApp')
  .controller('firstNgController', function($scope, firstNgFactory) {

	  	$scope.recipes = firstNgFactory.getFirstNg();

   });
