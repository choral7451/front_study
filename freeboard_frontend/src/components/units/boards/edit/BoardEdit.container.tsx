import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import BoardEditUI from "./BoardEdit.presenter";
import { UPDATE_BOARD } from "./BoardEdit.queries";

export default function BoardEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { id: Number(router.query.number) },
  });

  const [writer, setWriter] = useState(data?.fetchBoard.writer);
  const [title, setTitle] = useState(data?.fetchBoard.title);
  const [content, setContent] = useState(data?.fetchBoard.content);
  const [url, setUrl] = useState(data?.fetchBoard.url);

  const [updateBoard] = useMutation(UPDATE_BOARD);

  function pushDetail() {
    router.push(`/boards/${Number(router.query.number)}`);
  }

  async function onClickUpdateBoard() {
    const result = await updateBoard({
      variables: { writer, title, content, url, id: router.query.number },
    });
    router.push(`/boards/${result.data.updateBoard}`);
  }

  function onChangeWriter(e: ChangeEvent<HTMLInputElement>) {
    setWriter(e.target.value);
  }

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  function onChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <BoardEditUI
      data={data}
      pushDetail={pushDetail}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeWriter={onChangeWriter}
      onClickUpdateBoard={onClickUpdateBoard}
      onChangeUrl={onChangeUrl}
    />
  );
}
