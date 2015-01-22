(function () {
	'use strict';
	var app = angular.module('BlogApp');


	app.filter('limitFrom', [function(){
		return function(items, begin) {

			return items.slice( begin, begin+3);
        };

	}]);

}());
