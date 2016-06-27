var router = require('express').Router();

var pageGenerator = require('../tools/pageGenerator.js')

// public access
// the login page
router.get('/login', function (req, res, next) {
	res.sender('./neutral/Login');
});

// the registration page
router.get('/register', function (req, res, next){
	res.sender('./neutral/Register');
});

// internal public page
router.get('/:corporation/public/:pageName', Generator.publicPage);

// internal private pages
router.post('/:corporation/private/:user/:pageName', Generator.privatePage);

module.exports = router;