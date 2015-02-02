(function () {
	'use strict';

	var app = angular.module('BlogApp', ['ngRoute','underscore']);

	app.config(['$routeProvider' , function($routeProvider){
		$routeProvider
			.when('/', {
				redirectTo : '/posts/:page?'
			})
			.when('/posts/:page?' , {
				templateUrl : 'app/posts/posts.html',
				controller : 'postCtrl'
			})
			.when('/post/:title?', {
				templateUrl : 'app/post/post.view.html',
				controller : 'postCtrl'
		})
			.when('/admin' , {
				templateUrl : 'app/admin/admin.html',
				controller : 'MainCtrl'
			})
			.otherwise({
				redirectTo : '/'
			});
	}]);
}());
