import { gql } from "@apollo/client";

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $writer: String
    $title: String
    $content: String
    $url: String
    $id: String
  ) {
    updateBoard(
      id: $id
      updateBoardInput: {
        writer: $writer
        title: $title
        content: $content
        url: $url
      }
    )
  }
`;
