import mongoose from "mongoose";

const beerSchema = mongoose.Schema(
  {
    brewery: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    ibu: {
      type: Number,
      required: true,
    },
    abv: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "beer",
    timestamps: true,
  }
);

const Beer = mongoose.model("Beer", beerSchema);

export default Beer;
