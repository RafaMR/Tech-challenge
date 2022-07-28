const express = require('express');
const router = express.Router();
const phonesList = require('./../data/phones.json');

router.get('/', (req, res, next) => {
  res.json(phonesList);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const phone = phonesList.find(
    (phone) => phone.id.toString() === id.toString()
  );
  if (phone) {
    res.json(phone);
  } else {
    next(createError(404));
  }
});

module.exports = router;
