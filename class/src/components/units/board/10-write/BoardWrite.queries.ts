import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($number: String!, $message: String!) {
    createBoard(number: $number, message: $message) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($number: Float, $message: String) {
    updateBoard(number: $number, message: $message) {
      _id
      number
      message
    }
  }
`;
