const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const cors=require("cors");
// // const corsOptions ={
// //    origin:'*', 
// //    credentials:true,            //access-control-allow-credentials:true
// //    optionSuccessStatus:200,
// // }

// app.use(cors())
const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
