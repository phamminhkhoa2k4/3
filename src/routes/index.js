const newsRouter = require('./news.route');
const profileRouter = require('./profile.route');
const SiteRouter = require("./site.route");
const meRouter = require("./me.route");


function route(app) {
    app.use('/news', newsRouter);
    // app.get("/news", (req, res) => {
    //   res.render("news");
    // });
    app.use("/profile", profileRouter);
    app.use("/me", meRouter);

    app.use('/', SiteRouter);
    // app.get("/", (req, res) => {
    //   res.render("home");
    // });

    // app.get("/search", (req, res) => {
    //   res.render("search");
    // });
}

module.exports = route;
