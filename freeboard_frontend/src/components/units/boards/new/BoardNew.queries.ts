import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String!
    $title: String!
    $content: String!
    $zipcode: String!
    $address: String!
    $addressDetail: String!
    $url: String
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        title: $title
        content: $content
        zipcode: $zipcode
        address: $address
        addressDetail: $addressDetail
        url: $url
      }
    )
  }
`;
