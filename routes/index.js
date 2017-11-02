var express = require('express');
var router = express.Router();
var bloodRecord = require('./../db/bloodRecordDb.js').BloodRecord;
/* GET home page. */
router.get('/getRecord', function(req, res, next) {
    bloodRecord.find({"blood_group" : req.query.blood_group},function (err,blood) {
        if(err)
            console.log(JSON.stringify(err,null,2))
        else{
            res.json(200,blood)
        }
    });
});
router.get('/getAllRecord', function(req, res, next) {

    bloodRecord.find({},function (err,bloodRecords) {
        if(err)
            console.log(JSON.stringify(err,null,2))
        else{
            res.json(200,bloodRecords)
        }
    });
});
/*sample record I am saving you can save any record
{
  "blood_record":{
  	"blood_group":"faisal",
  	"tested":"y"
  }
}
 */
router.post('/saveRecord', function(req, res, next) {
    bloodRecord.create(req.body.blood_record,function (err,blood) {
        if(err)
            console.log(JSON.stringify(err,null,2))
        else{
            res.json(200,"Record saved successfully")
        }
    });
});
//Save the data
//Get the data

module.exports = router;
