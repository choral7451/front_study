import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($id: Float) {
    fetchBoard(id: $id) {
      id
      writer
      title
      content
      url
    }
  }
`;

export const FETCH_REVIEWS = gql`
  query fetchReviews($id: Float) {
    fetchReviews(id: $id) {
      id
      writer
      content
      star
      updatedAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: Float!) {
    deleteBoard(id: $id)
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $writer: String!
    $content: String!
    $star: Int!
    $pageNum: Int!
  ) {
    createReview(
      createReviewInput: {
        writer: $writer
        content: $content
        star: $star
        pageNum: $pageNum
      }
    )
  }
`;
