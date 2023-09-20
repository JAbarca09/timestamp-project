const express = require('express');
const timestampController = require('../controllers/timestampController');

const router = express.Router();

router.post('/:date?', timestampController.getTimeStamp);

module.exports = router;