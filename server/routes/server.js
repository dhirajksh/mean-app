/*
 * GET users listing.
 */
var db = require("../lib/db");

exports.list = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.server.find(function(error, documents){
        console.log('Getting server list');
        res.send(documents);
    });
};

exports.find = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.params.id);
    
    dbc.server.findOne({id:Number(req.params.id)}, function(error, document){
        console.log('Getting server detail');
        console.log(document);
        res.send(document);
    });
};

exports.create = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.server.insert(req.body, function(error, result){
        console.log('Server Document Inserted');
        console.log(result);
        res.send(result);
    });
};

exports.update = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.server.update({id:req.body.id}, {$set:{name:req.body.name, capacity:req.body.capacity, appname:req.body.appname}}, function(error, result){
        console.log('Server Document Updated');
        console.log(result);
        res.send(result);
    });
};

exports.delete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log('Document to be deleted for record:- ' + Number(req.params.id));
    dbc.server.remove({id:Number(req.params.id)}, function(error, result){
        console.log('Server Document Deleted');
        console.log(result);
        res.send(result);
    });
};