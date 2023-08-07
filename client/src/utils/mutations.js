import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $bid: Float!, $seller: String!) {
    addProduct(name: $name, bid: $bid, seller: $seller) {
      name
      seller
      bid
      description
      image
    }
  }
`;
export const UPDATTE_PRODUCT = gql`
  mutation updateProd($id: ID!, $bid: Float!, $highestBidder: String!) {
    updateProduct(_id: $id, bid: $bid, highestBidder: $highestBidder) {
      name
      seller
      bid
    }
  }
`;
