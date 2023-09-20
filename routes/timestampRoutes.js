const express = require('express');
const timestampController = require('../controllers/timestampController');

const router = express.Router();

router.get('/:date?', timestampController.getTimeStamp);

module.exports = router;