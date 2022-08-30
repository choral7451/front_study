import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String!
    $title: String!
    $content: String!
    $url: String
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        title: $title
        content: $content
        url: $url
      }
    )
  }
`;
