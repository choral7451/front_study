import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String!, $title: String!, $contents: String!){
    createBoard(writer: $writer, title: $title, contents: $contents {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  async function onClickGraphqlApi() {
    const result = await callGraphql(
      variables: {
        writer: "철수"
        title: "제목입니다"
        contents: "내용이에요"
      }
    );
    setData(result.data.createBoard.message);
  }

  return (
    <div>
      <div>{data}</div>
      <button onClick={onClickGraphqlApi}>Graphql-API 요청하기!!</button>
    </div>
  );
}
