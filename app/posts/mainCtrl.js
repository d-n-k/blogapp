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
				$scope.ttt = _.pluck(findOccurences(data.posts, 'tags'), 'key');
				$scope.tags = _.union($scope.ttt[0].split(','), $scope.ttt[1].split(','), $scope.ttt[2].split(','));
				// console.log(countTags($scope.postsData,'JavaScript'));
				console.log($scope.ttt);
				$scope.tagsA = tagsArray($scope.tags);
				console.log($scope.tagsA);
			})
			.error(function(data, status){

				console.error(status, data);
			});
		var findOccurences = function (posts, key) {
			return _.map(_.countBy(posts, key), function (val, key) {
				return {key: key, count: val};
			});

		};
		var countTags = function (arr, tag) {
			var count = 0;
			var tags = {};
			for (var i = 0; i < arr.length; i++) {
				if(arr[i].tags.indexOf(tag)>-1) {
					count ++;
				}
			}
			return tags = { tag: tag, count: count};
		};
		var tagsArray = function (arr) {
			var tagsArray = [];
			for (var i = 0; i < arr.length; i++) {
				countTags($scope.postsData,arr[i]);
				tagsArray.push(countTags($scope.postsData, arr[i]));
			}
			return tagsArray;
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
