/*  friend routes  */

const express = require('express');
const router = express.Router();


// friend
router.use('/login', require('./login'))


module.exports = router;