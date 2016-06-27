var router = require('express').Router();

var pageLogic = require('../logic/pagelogic.js')

router.get('/:corporation/public', pagelogic.get);
router.get('/login', function function_name (argument) {
	// body...
})


module.exports = router;