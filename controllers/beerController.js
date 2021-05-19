import Beer from "../models/beerModel.js";

export const getBeer = async (req, res, next) => {
  try {
    const beer = await Beer.find({});
    res.json(beer);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
