(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('MainCtrl', ['$scope', 'postsData', '$routeParams','$location',
		function($scope, postsData, $routeParams, $location){

		console.log($routeParams.page);
		console.log($location.path());
		console.log($location.search());




		$scope.postsData  = postsData;

		/*postsData.then(function(res, status) {
			$scope.postsData = res.data.posts
		}) */

		postsData
			.success(function(data, status) {
				$scope.postsData = data.posts;
				console.log($scope.postsData);
			})
			.error(function(data, status){
				console.error(status, data);
			});

	    /*$scope.toggleEditEmployee = function(employee){
	      employee.edit = !employee.edit;
	    };

		$scope.addEmployee = function(newEmployee) {
			newEmployee = angular.copy(newEmployee);
			$scope.model.employees.push(newEmployee);
		};

		$scope.deleteEmployee = function(index) {
			$scope.model.employees.splice(index, 1);
		};

		$scope.getTitle = function(id) {
			return $scope.model.jobs[id];
		};
*/
	}]);

}());
