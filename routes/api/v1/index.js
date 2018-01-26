const router = require('express').Router();

router.get('/status', (req, res, next) => {
  res.json({up: true});
});

module.exports = router;
