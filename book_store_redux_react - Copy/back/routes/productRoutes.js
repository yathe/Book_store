const express = require('express');
const Product = require("../db/Product");
const router = express.Router();

router.post('/submitAddress', (req, res) => {
    // Create a new Address document from the request body
    new Address(req.body).save()
      .then(() => res.status(201).send({ message: 'Address saved successfully' })) // Send success response
      .catch(() => res.status(400).send({ error: 'Unable to save address' })); // Send error response if there's an issue
  });



module.exports = router;
