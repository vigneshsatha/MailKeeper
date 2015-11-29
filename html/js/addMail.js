 var mailApp = angular.module("mailApp", []);
mailApp.controller('addMailDetail',function($scope,$location,$window){
	$scope.mail = {
		"id"			:	"",
		"code"			:	"",
		"mailSub"		:	"",
		"receiveDate"	:	"",
		"replyDate" 	:   "",
		"replyStatus" 	: 	"",
		"remarks"		:	"",
		"save"			:	function(){
								var mailDetail = $scope.mail;
								console.log(mailDetail.id);
								console.log(mailDetail.mailSub);
								console.log(mailDetail.replyDate);
								console.log(mailDetail.receiveDate);
								console.log(mailDetail.replyStatus);
								console.log(mailDetail.remarks);
								saveMail(mailDetail,function(){
									alert('Saved successfully');
									$scope.mail.code = "";
									$scope.mail.mailSub = "";
									$scope.mail.receiveDate = "";
									$scope.mail.replyStatus = "";
									$scope.mail.replyDate = "";
									$scope.mail.remarks = "";
									$scope.$apply();		
								});
							},
		"clear"			:	function(){
								$scope.mail.code = "";
								$scope.mail.mailSub = "";
								$scope.mail.receiveDate = "";
								$scope.mail.replyStatus = "";
								$scope.mail.replyDate = "";
								$scope.mail.remarks = "";
								$scope.$apply();
							},
		"viewAllMail"	:	function(){
								window.location.href='viewAllMails.html';
							}
		};
});