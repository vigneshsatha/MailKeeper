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
								});
							},
		"clear"			:	function(){
								$scope.mail = {
									"id"			:	"",
									"code"			:	"",
									"mailSub"		:	"",
									"receiveDate"	:	"",
									"replyDate" 	:   "",
									"replyStatus" 	: 	"",
									"remarks"		:	""
								};
							},
		"viewAllMail"	:	function(){
								window.location.href='viewAllMails.html';
							}
		};
});