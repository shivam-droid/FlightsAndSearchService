//importing package
const express = require('express');

//importing file
const v1ApiRoute = require('./v1/index.js')

const router = express.Router();
router.use('/v1',v1ApiRoute);

module.exports = router;