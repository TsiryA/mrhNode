import express from 'express';
import Generator from '../tools/pageGenerator.js';

const router = express.Router();

// public access
// the login page
router.get('/login', (req, res) => res.render('./neutral/Login'));

// the registration page
router.get('/register', (req, res) =>	res.render('./neutral/Register'));

// internal public page
router.get('/:corporation/public/:pageName', Generator.publicPage);

// internal private pages
router.post('/:corporation/private/:user/:pageName', Generator.privatePage);

router.get('/', (req, res) => {
  res.render('./neutral/index');
});

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

export default router;
