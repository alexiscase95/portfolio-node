const Person = require('../models/personModel');

exports.createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    console.log('After newPerson: ', newPerson)
    res.status(201).json({
      status: 'success',
      data: {
        person: newPerson,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        person,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Person not found',
    });
  }
};

exports.updatePerson = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      // data: {
      //   about,
      // },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
