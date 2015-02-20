(function () {
	'use strict';
	var app = angular.module('BlogApp');


	app.filter('limitFrom', [function(){
		return function(items, begin) {

			return items.slice( begin, begin+3);
        };

	}]);
	app.filter('sidebarfilter' ,['$filter',function($filter){

        return function (data, obj ) {
            var arr = [];

            if (obj) {

                if (obj.search){
                    return ($filter('filter')(data, obj.search));
                }

                if (obj.author){
                    for (var i = 0; i < data.length; i++) {
                        if ($filter('cleanTitle')(data[i].author).toLowerCase() === obj.author){
                            arr.push(data[i]);
                        }
                    }
                    return arr;
                }

                if (obj.category){
                    return $filter('filter')(data, {
                        tags: obj.category
                    });
                }

                if (obj.month){
                    for (var j = 0; j < data.length; j++) {
                        if ($filter('date')(data[j].date , 'MMMM').toLowerCase() === obj.month){
                            arr.push(data[j]);
                        }
                    }
                    return arr;
                }
            }

            return data;

         };
    }]);

}());
