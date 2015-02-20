(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('adminCtrl', ['$scope', 'postsData', '$routeParams','$location', 'utils', 'activeNav',
		function($scope, postsData, $routeParams, $location, utils, activeNav) {

			$scope.posts = postsData.get().then(function (data) {
	    		$scope.posts = data.posts;
	    		$scope.postsData = data.posts;
	    	});

	    	var tab = $location.path().slice(1);
			activeNav.set(tab);

			var title = 'Grunt - Intro';
        	var postObj = {
            	description: '*** TESTING ***'
        	};

			postsData.save(title, postObj)
	            .then(function (post) {
	                console.log(post);
	            });

		}]);


}());
