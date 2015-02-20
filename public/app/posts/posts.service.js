(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.factory('postsData', ['$http','$q',function($http, $q){

		var dataCache = {},
		defer = $q.defer(),
		promise = defer.promise

		$http.get('/posts')
			.success(function (data, status) {
				console.log(data);
				dataCache.posts = data.posts
				defer.resolve(dataCache);
			})
	    	.error(function (data, status) {
	        	console.error(status, data);
	    	});
	    var title = 'Grunt - Intro';
	    var postObj = {
	    	description: '*** Testing***'
	    };

		return {
			save: function(title, postObj) {
				var defer = $q.defer();
			$http.post('/posts', {
				title: title,
				data: postObj
			})
				.success(function (data, status) {
					defer.resolve(data);
			})

				return defer.promise;

			},
	    	get: function () {
	        	return promise;
	    	}
		};
	}]);
	app.factory('activeNav', ['$location', function($location) {

		var activeTab = {
			active: $location.path().slice(1)
		};
		return {
	    	get: function () {
	        	return activeTab;
	    	},
	    	set: function(tab) {
	    		activeTab.active = tab;
	    		return activeTab;
	    	}
		};
	}]);
}());
