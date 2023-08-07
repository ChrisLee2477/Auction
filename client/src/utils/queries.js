import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      bid
      name
      description
      seller
      image
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query getProducts {
    products {
      bid
      description
      name
      seller
      image
    }
  }
`;
