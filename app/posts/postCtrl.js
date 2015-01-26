(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('postCtrl', ['$scope', 'postsData', '$routeParams','$location',
		function($scope, postsData, $routeParams, $location){

		console.log($routeParams.page);
		console.log($location.path());
		console.log($location.search());

		$scope.fpage = ($routeParams.page);
		$scope.classActive = ($location.path().indexOf('posts')>-1);
		console.log($scope.classActive);

		// $scope.postsData = [];


		// postsData
		// 	.success(function(data, status) {
		// 		$scope.postsData = data.posts;
		// 		// findAccurancies(data.posts);

		// 	})
		// 	.error(function(data, status){
		// 		console.error(status, data);
		// 	});
		// var findOccurences = function (posts, key) {
		// 	angular.forEach(data.posts, function (obj, ind) {

		// 	});
		// };
		// console.log($scope.postsData.posts);
		// console.log($scope.findAccurancies(postsData, 'author', 'Ilan Cohen' ));

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
