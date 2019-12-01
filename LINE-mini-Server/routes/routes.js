/** 'url 중간에 params가 있는 코드'에 삽입해야 함. **/
// var router = express.Router({mergeParams : true});


const express = require('express');
const router = express.Router();

router.use('/', function(req, res) { 
    return res.send('Hello')
  });  

// User
router.use('/user', require('./user/user_routes'));

// Friend
router.use('/friend', require('./friend/friend_routes'));

module.exports = router;