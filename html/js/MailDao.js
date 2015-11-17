
var saveMail = function(mail,callback){
	var Datastore = require('nedb'), db = new Datastore({ filename: 'mailCollection.db', autoload: true });
	db.insert(mail);
	callback();
};