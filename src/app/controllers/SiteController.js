const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class SiteController {
  //[GET] /
  async index(req, res, next) {
    // res.render('home');
    // Course.find({})
    //   .then((Course) => res.json(Course))
    //   .catch((error) => res.status(400).json({ error: "Error !!!" }));
    //  const courses = new Course({
    //    name: "luong thi ngoc yen",
    //    age: "19",
    //    occupation: "girl friend of me",
    //  });
    // Course.insertMany([
    //   {
    //     name: "luong thi ngoc yen",
    //     age: "191",
    //     occupation: "girl friend of me",
    //   },
    //   {
    //     name: "luong thi ngoc yen",
    //     age: "191",
    //     occupation: "girl friend of me",
    //   },
    // ])
    //   .then(() => {
    //     console.log("update successful");
    //   })
    //   .catch((err) => {
    //     console.log("update successful");
    //   });

    // Course.updateMany(
    //   { name: "pmk" }, // Filter criteria to match the document you want to update
    //   { $set: { age: 191, occupation: "i love you" } } // Update fields and values
    // )
    //   .then(() => {
    //     console.log("Update successful");
    //   })
    //   .catch((err) => {
    //     console.log("Error during update:", err);
    //   });

    // Course.findOneAndUpdate(
    //   { name: "luong thi ngoc yen love khoa" }, // Filter criteria to find the document
    //   { $set: { age: 191, occupation: "girlfriend" } }, // Update fields and values

    // )
    //   .then((updatedDocument) => {
    //     if (updatedDocument) {
    //       console.log("Update successful. Updated document:", updatedDocument);
    //     } else {
    //       console.log("No document found matching the filter criteria.");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error during update:", err);
    //   });
    // Course.deleteMany({ name: "pmk" }) // Filter criteria to match the documents
    //   .then((result) => {
    //     console.log("Deletion successful. Deleted count:", result.deletedCount);
    //   })
    //   .catch((err) => {
    //     console.log("Error during deletion:", err);
    //   });
    // Course.deleteOne({ name: "pmk" }) // Filter criteria to match the document
    //   .then((result) => {
    //     if (result.deletedCount > 0) {
    //       console.log("Deletion successful. Document deleted.");
    //     } else {
    //       console.log("No document found matching the filter criteria.");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error during deletion:", err);
    //   });

    // - save()
    // + await
    // try{
    //   const profiles = new Course({
    //     name:"wisdom bringer",
    //     age: 19,
    //     occupation : "developer"
    //   });

    //   await profiles.save();

    // }catch(error){
    //   console.error(error);
    //   next(error);
    // }
    // + promise
    // const profiles = new Course({
    //   name:"wisdom bringer",
    //   age: 19,
    //   occupation : "developer"
    // });
    // profiles.save()
    //   .then(profile =>{
    //     console.log(profile);
    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //     next(error);
    //   });

    // - create()
    // + await
    // try {
    //   await Course.create({
    //     name: "wisdom bringer",
    //     age: 19,
    //     occupation: "developer",
    //   });
    // } catch (error) {
    //   console.error(error);
    //   next(error);
    // }
    // + promise

    // Course.create({
    //   name: "Mscience",
    //   age: 19,
    //   occupation: "developer",
    // })
    // .then((profile) => {
    //   console.log(profile);
    // })
    // .catch((error) => {
    //   console.error(error);
    //   next(error);
    // });

    // insertMany()
    // + await
    // try {
    // await Course.create([
    //   {
    //     name: "Mscience",
    //     age: 19,
    //     occupation: "developer",
    //   },
    //   {
    //     name: "wisdom bringer",
    //     age: 19,
    //     occupation: "producer",
    //   },
    // ]);
    // } catch (error) {
    //   console.error(error);
    //   next(error);
    // }
    // + promise
    // Course.insertMany([
    //   {
    //     name: "Mscience",
    //     age: 19,
    //     occupation: "developer",
    //   },
    //   {
    //     name: "wisdom bringer",
    //     age: 19,
    //     occupation: "producer",
    //   },
    // ])
    //   .then((profile) => {
    //     console.log(profile);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     next(error);
    //   });
    
    // - updateOne()
    // + await
    // try{
    //  await Course.updateOne({name : "wisdom bringer"}, {$set: {age : "12" }});
    //   console.log("update Successful");
    // }catch(error){
    //   console.error(error);
    // }
    // + promise
    // Course.updateOne({name : "Mscience"}, {$set : { age : "10"}})
    //   .then((profiles) => {
    //     console.log("update successful!");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     next(error);
    //   })
    // - updateMany()
    // + await
    // try{
    //  await Course.updateMany({name : "wisdom bringer"}, {$set: {age : "15" }});
    //   console.log("update Successful");
    // }catch(error){
    //   console.error(error);
    // }
    // + promise
    // Course.updateMany({ name: "Mscience" }, { $set: { age: "18" } })
    //   .then((profiles) => {
    //     console.log("update successful!", profiles);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     next(error);
    //   });
    // - deleteOne()
    // + await
    // try{
    //     await Course.deleteOne({name : "Mscience"});
    //     console.log("delete successful !");
    // }catch(error){
    //   console.error(error);
    // }
    // + promise
    // Course.deleteOne({name : "Mscience"})
    //   .then((profiles) => {
    //     if(profiles.deletedCount > 0){
    //       console.log("delete successful !")
    //     }else{
    //       console.log(" not found for delete")
    //     }
    //   })
    //   .catch((error) => {
    //       console.error(error);
    //       next(error);
    //  })

    // - deleteMany()
    // + await
    // try{
    //     await Course.deleteMany({name : "wisdom bringer"});
    //     console.log("delete successful !");
    // }catch(error){
    //   console.error(error);
    // }
    // + promise
    // Course.deleteMany({name : "pham minh khoa"})
    //   .then((profiles) => {
    //       console.log("delete successful !" ,profiles.deletedCount)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     next(error);
    //   })

    Course.find({})
      .exec()
      .then((Course) => {
        // Course = Course.map(Course => Course.toObject())
        res.render("home", {
          Course: multipleMongooseToObject(Course),
        });
      })
      .catch(next);
    //   .catch(error => next(error));
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();





// Course.findOneAndUpdate(
//   { name: "luong thi ngoc yen" }, // Filter criteria to find the document
//   { $set: { age: 191, occupation: "girlfriend" } }, // Update fields and values
//   { new: true } // Option to return the modified document
// )
//   .then((updatedDocument) => {
//     if (updatedDocument) {
//       console.log("Update successful. Updated document:", updatedDocument);
//     } else {
//       console.log("No document found matching the filter criteria.");
//     }
//   })
//   .catch((err) => {
//     console.log("Error during update:", err);
//   });