const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //[GET] /me/stored/profiles
  storedProfiles(req, res, next) {
    Course.find({})
      .then((profiles) => {
        res.render("me/stored-profile", {
          profiles: multipleMongooseToObject(profiles),
        });
      })
      .catch(next);
  }

  //[GET] /me/stored/profiles
  trashProfiles(req, res, next) {
    Course.findDeleted({})
      .then((profiles) => {
        res.render("me/trash-profile", {
          profiles: multipleMongooseToObject(profiles),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
