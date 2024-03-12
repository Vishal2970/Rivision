const express = require("express");
const router = express.Router();
const auth_controllers = require('../controllers/auth-controller')
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


//1st method
// router.get("/",(req,res) => {
//     res.status(200).send("Welcome to vishal's website by router");
// });

//2nd method
router.route("/").get(auth_controllers.home);

router.route("/register").post(validate(signupSchema),auth_controllers.register);

router.route("/login").post(auth_controllers.login);

module.exports = router;