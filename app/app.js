(function () {
	'use strict';

	var app = angular.module('BlogApp', ['ngRoute']);

	app.config(['$routeProvider' , function($routeProvider){
		$routeProvider
			.when('/', {
				redirectTo : '/posts/:page?'
			})
			.when('/posts/:page?' , {
				templateUrl : 'app/posts/posts.html',
				controller : 'MainCtrl'
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
