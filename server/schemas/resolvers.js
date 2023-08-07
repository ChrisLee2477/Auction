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
      const product = await product.create(args);
      return product;
    },
    updateProduct: async (parent, { id, bid, highestBidder }) => {
      return await Product.findByIdAndUpdate(
        { _id: id },
        { bid },
        { highestBidder },
        { new: true }
      );
    },
  },
};
