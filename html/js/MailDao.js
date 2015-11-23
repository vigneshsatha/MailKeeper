var Datastore = require('nedb'), db = new Datastore({ filename: 'mailCollection.db', autoload: true });
var saveMail = function(mail,callback){
	db.insert(mail);
	callback();
};

var viewAllMails = function(callback){
	
	db.find({},function(err,docs){
		callback(docs);
	});
};