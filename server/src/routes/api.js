import express from 'express';
import apiRouting from '../tools/apiRouting.js'
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/:corporation/:user/:action', apiRouting.analyse);

export default router;
