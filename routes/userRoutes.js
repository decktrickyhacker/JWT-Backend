const express = require('express');


const  {
  authUser,
  registerUser,
  updateUserProfile,
  getMe
} = require("../controllers/userController.js");
const  { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.get('/me', protect, getMe)

module.exports = router;
