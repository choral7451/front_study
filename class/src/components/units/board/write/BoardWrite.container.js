import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  async function onClickGraphqlApi() {
    const result = await callGraphql({
      variables: { writer, title, contents },
    });
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
    <BoardWriterUI
      onChangeWriter={onChangeWriter}
      onChangetitle={onChangetitle}
      setContents={setContents}
      onClickGraphqlApi={onClickGraphqlApi}
      data={data}
    />
  );
}
