import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);
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
    if (e.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangetitle(e) {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(e) {
    setContents(e.target.value);
    if (writer && title && e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <BoardWriterUI
      onChangeWriter={onChangeWriter}
      onChangetitle={onChangetitle}
      onChangeContent={onChangeContent}
      onClickGraphqlApi={onClickGraphqlApi}
      data={data}
      isActive={isActive}
    />
  );
}
