const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/app/index.html'));
});

module.exports = router;
