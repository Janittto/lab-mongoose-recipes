const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  level: {
    type: [String],
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: {
    type: [String],
  },
  cuisine: {
    required: true,
    type: String,
  },
  dishType: {
    type: [String],
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    default: "https://images.media-allrecipes.com/images/75131.jpg",
    type: String,
  },
  duration: {
    min: 0,
    type: Number,
  },
  creator: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
