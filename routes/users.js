var express = require('express');
var router = express.Router();
var UserDb = require('./../db/userDb.js').User;
/* GET users listing. */
router.post('/login', function(req, res, next) {
  var params = {};
  console.log(params);
  UserDb.findOne({"username": req.body.username},function (err,userAccount) {
      if(err)
        console.log("Error occurred "+ JSON.stringify(err,null,2));
      else {
          console.log(JSON.stringify(userAccount,null,2))
          if (userAccount == null)
              res.json(404, "invalid username/password");
          else
              res.json(200,"ok");
      }
  })
});
router.get('/getAllUsers',function (req,res) {
    UserDb.find({},function (err,user) {
        console.log(JSON.stringify(err,null,2));
        res.json(user);
    })
});

router.post('/createAccount',function (req,res) {
    UserDb.findOneAndUpdate({
        "username": req.body.username
    }, {
        "username": req.body.username,
        "password": req.body.password

    }, {
        upsert: true
    }, function(err, account) {
        console.log("Account Created Successfully", err, account)
        res.json(account);


    });
})
module.exports = router;
