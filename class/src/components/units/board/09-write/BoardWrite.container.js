import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriterUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState("");
  const [_id, set_id] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  async function onClickGraphqlApi() {
    const result = await callGraphql({
      variables: { number, message },
    });
    setData(result.data.createBoard.message);
    set_id(result.data.createBoard._id);
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  }

  function onChangeNumber(e) {
    setNumber(e.target.value);
  }

  function onChangeMessage(e) {
    setMessage(e.target.value);
  }

  async function onClickUpdate() {
    const myvariables = { number: Number(router.query.number) };
    if (message) myvariables.message = message;

    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
  }

  return (
    <BoardWriterUI
      onChangeNumber={onChangeNumber}
      onChangeMessage={onChangeMessage}
      onClickGraphqlApi={onClickGraphqlApi}
      onClickUpdate={onClickUpdate}
      _id={_id}
      data={data}
      isEdit={props.isEdit}
      boardData={props.boardData}
    />
  );
}
