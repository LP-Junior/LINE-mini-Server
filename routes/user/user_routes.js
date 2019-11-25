/*  user routes  */

const express = require('express');
const router = express.Router();


// LINE Login
router.use('/login', require('./login'));

// user 조회 및 수정
router.use('/info', require('./info'));


module.exports = router;