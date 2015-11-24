var viewAllMailApp = angular.module("viewAllMailApp", []);
viewAllMailApp.controller('viewAllMailController',function($scope,$location,$window,$timeout){
	$scope.mails = [];
	$scope.controls = {
		
		"refresh" : function(){
					viewAllMails(function(docs){
						console.log(docs);
						$scope.mails = docs;
					});
					}
	};
	 $timeout(function(){
		 $scope.apply();
	 }, 3000);
	 $scope.init = function(){
					viewAllMails(function(docs){
						console.log(docs);
						$scope.mails = docs;
					});
					};
});