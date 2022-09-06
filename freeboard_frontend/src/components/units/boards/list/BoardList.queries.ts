import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float) {
    fetchBoards(page: $page) {
      id
      writer
      title
      updatedAt
    }
  }
`;
