var viewAllMailApp = angular.module("viewAllMailApp", []);
viewAllMailApp.controller('viewAllMailController',function($scope,$location,$window){
	$scope.mails = [];
	$scope.controls = {
		
		"refresh" : function(){
					viewAllMails(function(docs){
						console.log(docs);
						$scope.mails = docs;
					});
					}
	};
});