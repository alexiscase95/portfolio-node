const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router.route('/').post(personController.createPerson);

router
  .route('/:id')
  .get(personController.getPerson)
  .patch(personController.updatePerson);

module.exports = router;
