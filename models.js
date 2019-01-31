const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cakes");
reviewSchema = new mongoose.Schema({
    comments: { type: String, required: true, minlenth: 10 },
    rating: { type: Number, maxlength: 2 }
}, { timestamps: true })
cakeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    imgurl: { type: String, required: true },
    reviews: [reviewSchema]
}, { timestamps: true });
module.exports = {
    cakes: mongoose.model("cakes", cakeSchema),
    reviews: mongoose.model("reviews", reviewSchema)
}
