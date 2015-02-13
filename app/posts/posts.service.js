(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.factory('postsData', ['$http','$q',function($http, $q){

		var dataCache = {},
		defer = $q.defer(),
		promise = defer.promise

		$http.get('data/posts.json')
			.success(function (data, status) {
				dataCache.posts = data.posts
				defer.resolve(dataCache);
			})
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
