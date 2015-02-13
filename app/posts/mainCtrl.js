(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('mainCtrl', ['$scope', 'postsData', '$routeParams','$location', 'utils','_',
		function($scope, postsData, $routeParams, $location, utils, _) {

		$scope.fpage = ($routeParams.page);
		$scope.classActive = ($location.path().indexOf('posts')>-1);
		console.log($scope.classActive);
		// $scope.sum = [];
		$scope.postsData = [];
		$scope.cleanTitle = utils.cleanTitle;

		postsData.get().then(function (data) {
			console.log(data);
    		$scope.posts = data.posts;
    		$scope.postsData = data.posts;
			$scope.authors = findOccurences(data.posts, 'author');
			$scope.ttt = _.pluck(findOccurences(data.posts, 'tags'), 'key');
			$scope.tags = _.union($scope.ttt[0].split(','), $scope.ttt[1].split(','), $scope.ttt[2].split(','));
			// console.log(countTags($scope.postsData,'JavaScript'));
			$scope.tagsA = tagsArray($scope.tags);
			console.log($scope.authors[0].count);
			$scope.sumPosts = sumPosts($scope.authors);

			for(var post in $scope.postsData){

				if ($scope.postsData.hasOwnProperty(post)){

					var postTitle = utils.cleanTitle($scope.postsData[post].title);

					if(postTitle === $routeParams.title){

						$scope.post = $scope.postsData[post];

						
					}
				}
			}
			console.log($scope.postsData);
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

		var sumPosts = function(arr) {
			var sum = 0;
			for (var i = 0; i < arr.length; i++) {
				sum = sum + arr[i].count ;

			}
			return sum;
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
