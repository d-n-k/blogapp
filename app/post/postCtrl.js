(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.controller('postCtrl', ['$scope', 'postsData', '$routeParams','$location', 'utils','$sanitize','$http',
		function($scope, postsData, $routeParams, $location, utils, $sanitize, $http) {

		$scope.currentFilter = $location.search().category;

		var init = function() {
			$scope.pFilter = 2;
			$scope.currpage = 3;
			$scope.fpage = $routeParams.page;

			if ($routeParams.page === '2') {
				$scope.pFilter = 2;
				$scope.currpage = 3;
				$scope.fpage = undefined;
			}
			if ($routeParams.page > 2){
				$scope.pFilter = $scope.pFilter + 3;
				$scope.currpage = $scope.currpage + 1;
			}
			if ($routeParams.page === undefined) {
				$scope.pFilter = 0;
				$scope.currpage = 2;
			}



		};
		init();

		postsData.get().then(function (data) {
			console.log(data);
    		$scope.posts = data.posts;
    		$scope.postsData = data.posts;
			
			for(var post in $scope.postsData){

				if ($scope.postsData.hasOwnProperty(post)){

					var postTitle = utils.cleanTitle($scope.postsData[post].title);

					if(postTitle === $routeParams.title){

						$scope.post = $scope.postsData[post];
						
						$http.get($scope.post.htmlPath)
						    .success(function (data) {
						        $scope.postHtml = $sanitize(data);
						    });
					}
				}
			}
			console.log($scope.postsData);
		});
		$scope.cleanTitle = utils.cleanTitle;
		console.log($scope.pFilter);
		console.log($scope.currpage);
		console.log($scope.fpage);

		


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
