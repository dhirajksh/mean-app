/*
 * GET users listing.
 */
var db = require("../lib/db");

exports.list = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.user.find(function(error, documents){
        console.log('Getting user list');
        res.send(documents);
    });
};

exports.find = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.user.findOne({_id:dbc.ObjectId(req.params.id)}, function(error, document){
        console.log('Getting user detail');
        console.log(document);
        res.send(document);
    });
};

exports.create = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.user.insert(req.body, function(error, result){
        console.log('User Document Inserted');
        console.log(result);
        res.send(result);
    });
};

exports.update = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.user.update({"_id":dbc.ObjectId(req.params.id)}, {name:req.body.name, username:req.body.username, email:req.body.email, address:req.body.address, mobile:req.body.mobile}, function(error, result){
        console.log('User Document Updated');
        console.log(result);
        res.send(result);
    });
};

exports.delete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.user.remove({"_id":dbc.ObjectId(req.params.id)}, function(error, result){
        console.log('User Document Deleted');
        console.log(result);
        res.send(result);
    });
};