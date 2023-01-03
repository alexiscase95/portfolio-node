const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router
  .route('/')
  .get(personController.getPerson)
  .patch(personController.updatePerson)
  .post(personController.createPerson);

module.exports = router;
