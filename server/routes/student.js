/*
 * GET users listing.
 */
var db = require("../lib/db");

exports.list = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.student.find(function(error, documents){
        console.log('Getting student list');
        res.send(documents);
    });
};

exports.find = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.student.findOne({_id:dbc.ObjectId(req.params.id)}, function(error, document){
        console.log('Getting student detail');
        console.log(document);
        res.send(document);
    });
};

exports.create = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.student.insert(req.body, function(error, result){
        console.log('Student Document Inserte');
        console.log(result);
        res.send(result);
    });
};

exports.update = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.student.update({"_id":dbc.ObjectId(req.params.id)}, {SID:req.body.SID, FName:req.body.FName, LName:req.body.LName, ClassName:req.body.ClassName, Address:req.body.Address, ContactNo:req.body.ContactNo}, function(error, result){
        console.log('Student Document Updated');
        console.log(result);
        res.send(result);
    });
};

exports.delete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.student.remove({"_id":dbc.ObjectId(req.params.id)}, function(error, result){
        console.log('Student Document Deleted');
        console.log(result);
        res.send(result);
    });
};
