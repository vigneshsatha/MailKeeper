var Datastore = require('nedb'), db = new Datastore({ filename: 'mailCollection.db', autoload: true });
var saveMail = function(mail,callback){
	db.insert(mail,function (err, newDoc) {
  	callback();
	});
};

var viewAllMails = function(callback){
	
	db.find({},function(err,docs){
		callback(docs);
	});
};

var viewOneMail = function(callback){
	var oneMail =  require('./js/globalCache.js');
	var id = oneMail.id;
	db.find({"_id":id},function(err,docs){
		console.log(docs[0]);
		callback(docs[0]);
	});	
};

var removeMail = function(id,callback){
	db.remove({"_id":id});	
	callback();
}

var updateMail = function(mail,callback){
	db.update({_id:mail._id},mail,{},function (err, newDoc) {
  	callback(err);
	});
};