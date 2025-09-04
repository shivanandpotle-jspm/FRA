const express = require("express");
const router = express.Router();
const fraClaimsController = require("../controllers/fraClaimsController");

// Debug log to check controller functions
console.log("fraClaimsController:", fraClaimsController);

// Routes mapping
router.get("/claims", fraClaimsController.getAllFraClaims);
router.get("/claims/:id", fraClaimsController.getFraClaimById);
router.post("/claims", fraClaimsController.createFraClaim);
router.put("/claims/:id", fraClaimsController.updateFraClaim);
router.delete("/claims/:id", fraClaimsController.deleteFraClaim);

module.exports = router;
