const router = require('express').Router();
const apiV1 = require('./api/v1');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.use('/api/v1', apiV1);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
router.use((err, req, res, next) => {
  const message = res.locals.message = err.message;
  const error = res.locals.error = req.app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  switch (req.accepts(['html', 'json'])) {
    case 'json':
      res.status(status).json({message, error: error.stack});
      break;
    case 'html':
      res.status(status).render('error');
      break;
    default:
      res.sendStatus(err.status || 500);
  }
});

module.exports = router;
