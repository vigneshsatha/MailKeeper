var viewAllMailApp = angular.module("viewAllMailApp", []);
viewAllMailApp.controller('viewAllMailController',function($scope,$location,$window,$timeout){
	$scope.search = {query:''};
	$scope.mails = [];
	$scope.controls = {
		 monthNames : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  						"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
						],
		"refresh" : function(){
					viewAllMails(function(docs){
						console.log(docs);
						$scope.mails = docs;
						$scope.$apply();
					});
					},
		"edit"		: function(id){
						var globalVal = require('./js/globalCache.js');
						globalVal.id=id;
						$window.location = "editMail.html";
					},
		"view"		: function(id){
						var globalVal = require('./js/globalCache.js');
						globalVal.id=id;
						$window.location="viewOneMail.html";
					},
		"remove"	: function(id){
							if(confirm('Do you wish to remove item?')){
									removeMail(id,function(){
									viewAllMails(function(docs){
									console.log(docs);
									$scope.mails = docs;
									$scope.$apply();
								});
							});
						}
					}
	};
	 $timeout(function(){
		 $scope.$apply();
	 }, 3000);
	 $window.onload = function(){
		viewAllMails(function(docs){
						console.log(docs);
						$scope.mails = docs;
						$scope.$apply();
					});
	};
});