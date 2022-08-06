import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  async function onClickGraphqlApi() {
    try {
      const result = await callGraphql({
        variables: { writer, title, contents },
      });
      alert("게시글 등록에 성공했어요!");
      alert("상세 페이지로 이동해 볼까요?");
      router.push(
        `05-08-dynamic-routed-input/${result.data.createBoard.number}`
      );
    } catch (err) {
      alert(error.message);
    }
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
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangetitle} /> <br />
      내용: <input type="text" onChange={onChangeContent} /> <br />
      <div>{data}</div>
      <button onClick={onClickGraphqlApi}>Graphql-API 요청하기!!</button>
    </div>
  );
}
