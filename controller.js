const model = require("./models");
module.exports = {
    allCakes: function (req, res) {
        model.cakes.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    createCake: function (req, res) {
        model.cakes.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addReview: function (req, res) {
        console.log(req.params.id);
        console.log(req.body);
        model.cakes.findOneAndUpdate({ _id: req.params.id }, { $push: { reviews: req.body } })
            .then(data => console.log("hitting then") || res.json(data))
            .catch(err => console.log("hitting catch") || res.json(err))
    },
    getOneCake: function (req, res) {
        model.cakes.findById(req.params.id).then(data => res.json(data))
            .catch(err => res.json(err))
    }
}