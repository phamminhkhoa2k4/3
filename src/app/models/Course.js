const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, require: true },
    age: { type: String, require: true },
    occupation: { type: String, require: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// add plug in
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Course", Course);
