const typeDefs = `
type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    seller: String
    highestBidder: String
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
  }
`;
