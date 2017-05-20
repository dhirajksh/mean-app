/*
 * GET users listing.
 */
var fee = require('../models/fee');
var admin = require('../models/admin');

exports.dshome = function(req, res) {
		// Getting session list
		admin.getSessionList(function(er, sessiondata) {
			
			admin.getClassList(function(er, classdata) {
				res.render('pages/fee/dueslip', {
					title : 'Due Slip',
					sessionlist : sessiondata.rows,
					classlist : classdata.rows
				});				
			});			
		});
		// *************
};


exports.dsgenerate = function(req, res) {
	var month = req.body.Month;
	var totFeeAmt = 0;
	fee.getClassWiseFeeHead (req, function(er, feeheadlist){
		//Calculate the applicable fee for current month
		feeheadlist.rows.forEach(function (feeheadrec) { 
			if (feeheadrec.value.MonthApplicable.contains(month)){				
				totFeeAmt = totFeeAmt + parseInt(feeheadrec.value.FeeAmount);
				console.log(totFeeAmt);
			}else{
				console.log('Fee not applicable for current month');
			}
		});
		//End of calculation
		var dsdata = null;
		// Fetch student list against the selected class for fee generation
		fee.getClassWiseStudentList(req, function(er, studentlist) {
			studentlist.rows.forEach(function (studentrec) { 
				// Generate due slip and update the status
				dsdata = computeDueSlip(studentrec.value, month, totFeeAmt);
				console.log(JSON.stringify(dsdata));
				fee.dscreate(dsdata, function(er, result) {
					console.log(JSON.stringify(result));
				});
				//******
			});
			res.send({"msg":"Success"});				
		});
	});
};

exports.dsclass = function(req, res) {
	res.render('pages/student-form', {
		title : 'Student Registration',
		mode : 'E'
	});
};

exports.dsclassgenerate = function(req, res) {
	res.render('pages/student-form', {
		title : 'Student Registration',
		mode : 'E'
	});
};

exports.fchome = function(req, res) {
	res.render('pages/upcoming', {
		title : 'Fee Collection',
		body : 'Coming soon............'
	});
};

exports.fcstudent = function(req, res) {
	res.render('pages/student-form', {
		title : 'Student Registration',
		mode : 'E'
	});
};

exports.fcstudentpayment = function(req, res) {
	res.render('pages/student-form', {
		title : 'Student Registration',
		mode : 'E'
	});
};

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

function computeDueSlip(rec, month, feeAmt){
	
	// Get previous dues against that particular student
	
	// 
	
	var data = {
			  "SName": "SVV",
			  "DCType": "DueSlip",
			  "DueSlipNo": "",
			  "Session": rec.Session,
			  "FeeMonth": month,
			  "SID": rec.SID,
			  "ClassName": rec.ClassName,
			  "Section": rec.Section,
			  "FullName": rec.FName + ' ' + rec.LName,
			  "FatherName": rec.FatherName,
			  "ContactNo": rec.ContactNo,
			  "PrevDues": 0,
			  "CurrentFee": feeAmt,
			  "OneTimeFee": 0,
			  "Discount": 0,
			  "NetAmount": feeAmt,
			  "PaidAmount": {},
			  "BalAmount": feeAmt,
			  "Status": 1,
			  "CreationDate": Date()
		};
	
	return data;
}