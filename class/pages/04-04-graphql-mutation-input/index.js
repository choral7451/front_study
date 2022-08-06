import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String!, $title: String!, $contents: String!) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  async function onClickGraphqlApi() {
    const result = await callGraphql({
      variables: { writer, title, contents },
    });
    console.log(result);
    setData(result.data.createBoard.message);
  }

  function onChangeWriter(e) {
    setWriter(e.target.value);
  }

  function onChangetitle(e) {
    setTitle(e.target.value);
  }

  function onChangeContent(e) {
    setContents(e.target.value);
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangetitle} />
      내용: <input type="text" onChange={onChangeContent} />
      <div>{data}</div>
      <button onClick={onClickGraphqlApi}>Graphql-API 요청하기!!</button>
    </div>
  );
}
