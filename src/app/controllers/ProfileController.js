const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class ProfileController {
  //[GET] /profile/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("profile/show", {
          course: mongooseToObject(course),
        });
        // res.json(course);
      })
      .catch(next);
  }

  //[GET] /profile/:create
  create(req, res, next) {
    res.render("profile/create");
  }

  //[GET] /profile/:edit
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) => {
      res.render("profile/edit", {
        course: mongooseToObject(course),
      });
    });
  }
  //[PUT] /profile/:id
  update(req, res, next) {
    const id = req.params.id;
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/profiles");
      })
      .catch(next);
  }

  //[DELETE] /profile/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  //[POST] /profile/:store
  store(req, res, next) {
    const profile = new Course(req.body);
    profile
      .save()
      .then((profiles) => {
        res.redirect("/");
      })
      .catch(next);
  }

   //[PATCH] profile/:id/restore
  restore(req, res, next) {
    console.log(req.params.id)
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ProfileController();
