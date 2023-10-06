const express = require("express");
const router = express.Router();

const profileController = require("../app/controllers/ProfileController");

router.get("/create", profileController.create);
router.get("/:id/edit", profileController.edit);
router.put("/:id", profileController.update);
router.patch("/:id/restore", profileController.restore);
router.delete("/:id", profileController.destroy);
router.post("/store", profileController.store);
router.get("/:slug", profileController.show);


module.exports = router;
