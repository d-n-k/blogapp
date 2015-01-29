(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.factory('postsData', ['$http',function($http){

		return $http.get('data/posts.json');
	}]);
}());
