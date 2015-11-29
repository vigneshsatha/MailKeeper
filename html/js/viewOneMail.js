 var mailApp = angular.module("ViewOne", []);
mailApp.controller('viewOneController',function($scope,$location,$window){
	$scope.mail = {
		"id"			:	"",
		"code"			:	"",
		"mailSub"		:	"",
		"receiveDate"	:	"",
		"replyDate" 	:   "",
		"replyStatus" 	: 	"",
		"remarks"		:	""
	};
	$scope.controls = {
		"refresh" : function(){
			viewOneMail(function(oneMail){
				$scope.mail = oneMail;
				$scope.$apply();
			});
			}
	};
	$window.onload = function(){
		viewOneMail(function(oneMail){
				$scope.mail._id = oneMail._id;
				$scope.mail.code = oneMail.code;
				$scope.mail.mailSub = oneMail.mailSub;
				$scope.mail.receiveDate = oneMail.receiveDate;
				$scope.mail.replyStatus = oneMail.replyStatus;
				$scope.mail.replyDate = oneMail.replyDate;
				$scope.mail.remarks = oneMail.remarks;
				$scope.$apply();
			});
	};
});