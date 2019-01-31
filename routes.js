const controller = require("./controller");
module.exports = app => {
    app.get("/allCakes", controller.allCakes);
    app.post("/createCake", controller.createCake);
    app.put("/:id", controller.addReview);
    app.get("/:id", controller.getOneCake);
}