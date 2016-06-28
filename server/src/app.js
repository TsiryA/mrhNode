import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';
import path from 'path';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';

const app = express();
const upload = multer();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));

import pages from './routes/pages';
import api from './routes/api';

app.use('/pages', pages);

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Server Online');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


const server = app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
