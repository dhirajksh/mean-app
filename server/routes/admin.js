/*
 * GET users listing.
 */
var db = require("../lib/db");

exports.recipelist = function(req, res) {
	var dbc = db.getDBCon();
    dbc.recipe.find(function(error, documents){
        console.log('Getting Recipe List');
        res.send(documents);
    });
};

exports.sessionlist = function(req, res) {
	var dbc = db.getDBCon();
    dbc.session.find(function(error, documents){
        console.log('Getting Session List');
        res.send(documents);
    });
};

exports.classlist = function(req, res) {
    var dbc = db.getDBCon();
    dbc.class.find(function(error, documents){
        console.log('Getting Class List');
        res.send(documents);
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