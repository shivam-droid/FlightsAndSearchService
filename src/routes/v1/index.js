//importing package
const express = require('express');

//importing file
const {create,destroy,get,update} = require('../../controllers/city-controller.js');

const router = express.Router();

router.post('/city',create);
router.delete('/city/:id',destroy);
router.get('/city/:id',get);
router.patch('/city/:id',update);

module.exports = router;