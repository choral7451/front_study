import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      id
      writer
      title
      updatedAt
    }
  }
`;
