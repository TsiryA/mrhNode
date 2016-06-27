var router = require('express').Router();

var apiRouting = require('../tools/apiRouting.js')

// internal public page
router.post('/:corporation/:user/:action', apiRouting.analyse);

module.exports = router;