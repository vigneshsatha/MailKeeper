 var mailApp = angular.module("EditMail", []);
mailApp.controller('EditMailDetail',function($scope,$location,$window){
	$scope.mail = {
		"_id"			:	"",
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
								updateMail(mailDetail,function(){
									alert('Updated successfully');
									$window.location = "viewAllMails.html";		
								});
							},
		"close"			:	function(){
			$window.close();
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