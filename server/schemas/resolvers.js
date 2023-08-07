const { Product } = require("../models");

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
  },
  Mutation: {
    addProduct: async (parent, args) => {
      const product = await Product.create(args);
      return product;
    },
    updateProduct: async (parent, { _id, bid, highestBidder }) => {
      return await Product.findByIdAndUpdate(
        _id,
        { bid: bid, highestBidder: highestBidder },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
