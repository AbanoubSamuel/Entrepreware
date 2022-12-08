const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController")




// Quiz Routes 

router.get("/view", quizController.getQuizes);




module.exports = router;
