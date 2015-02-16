(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('adminCtrl', ['$scope', 'postsData', '$routeParams','$location', 'utils',
		function($scope, postsData, $routeParams, $location, utils) {

			$scope.posts = postsData.get().then(function (data) {
	    		$scope.posts = data.data.posts;
	    		$scope.postsData = data.data.posts;
	    	}
		
}());
