
const Form = require('../model/formSchema');
const express= require("express");
const router = express.Router();
router.post('/forms', async (req, res) => {
    try {
      const { name, age, gender, contactNumber } = req.body;
      const form = new Form({ name, age, gender, contactNumber });
      await form.save();
      res.status(201).json(form);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  router.get('/getforms', async (req, res) => {
    try {
      const forms = await Form.find();
      res.json(forms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  module.exports = router;
