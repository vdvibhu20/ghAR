var express = require('express');
var router = express.Router();
var sendmail= require('../public/submitProperty/sendmail')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.sendfile('./public/frontend_template/index.html');
});

router.post('/submitProperty', function (req, res) {
  console.log('hello submit Property');
   req= req.body;
   sendmail.sendmail(req, function(result){
       res.json({result});
   })
});

module.exports = router;
