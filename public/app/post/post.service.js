(function () {
	'use strict';
	var app = angular.module('BlogApp');

	app.factory('utils', function(){
		return {

			cleanTitle: function(title){

				title = title.replace(/[ ]+/g ,'');

				if(title.indexOf(',') > -1){
					title = title.replace(',', '-');
				}

				return title;
			}

		};
	});
}());
