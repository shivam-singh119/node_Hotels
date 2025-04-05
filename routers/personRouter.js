const express = require("express");
const router = express.Router();
const {getAllPersons,getPerson,createPerson,updatePerson,deletePerson} = require("../controller/personController");


router.get('/', getAllPersons);
router.get('/:id', getPerson);
router.post('/createPerson', createPerson);
router.put('/updatePerson/:id', updatePerson);
router.delete('/deletePerson/:id', deletePerson);
module.exports = router;