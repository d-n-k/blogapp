(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('mainCtrl', ['$scope', 'postsData', '$routeParams','$location',
		function($scope, postsData, $routeParams, $location){

		console.log($routeParams.page);
		console.log($location.path());
		console.log($location.search());

		$scope.fpage = ($routeParams.page);
		$scope.classActive = ($location.path().indexOf('posts')>-1);
		console.log($scope.classActive);

		$scope.postsData = [];


		postsData
			.success(function(data, status) {
				$scope.postsData = data.posts;
				$scope.authors = findOccurences(data.posts, 'author');
				$scope.rrr = findOccurences(data.posts, 'tags');
				console.log($scope.rrr);
				$scope.ttt = _.pluck(findOccurences(data.posts, 'tags'), 'key');
				$scope.tags = _.union($scope.ttt[0].split(','), $scope.ttt[1].split(','), $scope.ttt[2].split(','));
				$scope.h = _.countBy($scope.rrr, {key: 'JavaScript'});
				console.log($scope.h);
			})
			.error(function(data, status){

				console.error(status, data);
			});
		var findOccurences = function (posts, key) {
			return _.map(_.countBy(posts, key), function (val, key) {
				return {key: key, count: val};
			});

		};
		var split = function (arr) {
			for (var i = 0; i < arr.length; i++) {
				var a = arr[i].split(',');
				var b = _.union(a);
				return b;


			}
			return b;
		};
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
