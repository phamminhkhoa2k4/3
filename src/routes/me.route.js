const express = require("express");
const router = express.Router();

const profileController = require("../app/controllers/MeController");

router.get("/stored/profiles", profileController.storedProfiles);
router.get("/trash/profiles", profileController.trashProfiles);



module.exports = router;
