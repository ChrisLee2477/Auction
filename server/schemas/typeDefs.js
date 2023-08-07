const typeDefs = `
type Product {
    _id: ID
    name: String
    description: String
    image: String
    bid: Float
    seller: String
    highestBidder: String
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    addProduct(name: String!, bid: Float!, seller: String!): Product
    updateProduct(_id: ID!, bid: Float!, highestBidder: String!): Product
  }
`;

module.exports = typeDefs;
