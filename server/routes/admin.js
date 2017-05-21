/*
 * GET users listing.
 */
var db = require("../lib/db");


// ************ API for Class Object *******************8

exports.classlist = function(req, res) {
    var dbc = db.getDBCon();
    dbc.class.find(function(error, documents){
        console.log('Getting Class List');
        res.send(documents);
    });
};

exports.classfind = function(req, res) {
    var dbc = db.getDBCon();
    dbc.class.findOne({_id:dbc.ObjectId(req.params.id)}, function(error, documents){
        console.log('Getting Class List');
        res.send(documents);
    });
};

exports.classcreate = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.class.insert(req.body, function(error, result){
        console.log('Class Document Inserte');
        console.log(result);
        res.send(result);
    });
};

exports.classupdate = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.student.update({"_id":dbc.ObjectId(req.params.id)}, {classname:req.body.classname, sectionlist:req.body.sectionlist}, function(error, result){
        console.log('Class Document Updated');
        console.log(result);
        res.send(result);
    });
};

exports.classdelete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.student.remove({"_id":dbc.ObjectId(req.params.id)}, function(error, result){
        console.log('Class Document Deleted');
        console.log(result);
        res.send(result);
    });
};


// ************ API for Session Object *******************8

exports.sessionlist = function(req, res) {
	var dbc = db.getDBCon();
    dbc.session.find(function(error, documents){
        console.log('Getting Session List');
        res.send(documents);
    });
};

exports.sessionfind = function(req, res) {
	var dbc = db.getDBCon();
    dbc.session.findOne({_id:dbc.ObjectId(req.params.id)}, function(error, documents){
        console.log('Getting Session Record');
        res.send(documents);
    });
};

exports.sessioncreate = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.session.insert(req.body, function(error, result){
        console.log('Session Document Inserte');
        console.log(result);
        res.send(result);
    });
};

exports.sessionupdate = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    console.log(req.body);
    dbc.session.update({"_id":dbc.ObjectId(req.params.id)}, {sessionname:req.body.sessionname, startdate:req.body.startdate, enddate:req.body.enddate, monthlist:req.body.monthlist}, function(error, result){
        console.log('Session Document Updated');
        console.log(result);
        res.send(result);
    });
};

exports.sessiondelete = function(req, res) {
	//getStudentList(req, res);
	var dbc = db.getDBCon();
    dbc.session.remove({"_id":dbc.ObjectId(req.params.id)}, function(error, result){
        console.log('Session Document Deleted');
        console.log(result);
        res.send(result);
    });
};

exports.sectionlist = function(req, res) {
    var dbc = db.getDBCon();
	var cName = req.query.className;
	console.log(cName);
    dbc.class.find({"ClassName":cName}, function(error, documents){
        console.log('Getting Section List');
        res.send(documents);
    });
};

exports.feeheadlist = function(req, res) {
    var dbc = db.getDBCon();
    dbc.feehead.find(function(error, documents){
        console.log('Getting Feehead List');
        res.send(documents);
    });
};