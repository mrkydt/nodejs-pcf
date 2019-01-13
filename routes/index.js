var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ky Dinh' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  let file = req.params['demofile']
  console.log("file")
  console.log(req.headers['content-type'])
  let test = req.files
  console.log('ttt'+ test)
  axios({
    method: 'POST',
    url: 'http://localhost:8080/upload',
    headers:{
      'content-type': req.headers['content-type'],
    },
    data:{
      //file: req.file['demofile']
    }
  }) 
  
  res.render('index', { title: 'Ky Dinh' });
});
module.exports = router;
