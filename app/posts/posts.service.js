(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.factory('postsData', ['$http',function($http){

		var promise = $http.get('data/posts.json')
	    	.error(function (data, status) {
	        	console.error(status, data);
	    	});

		return {
	    	get: function () {
	        	return promise;
	    	}
		};
	}]);
}());
