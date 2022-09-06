import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import * as S from "./BoardList.styles";
import { IBoardList } from "./BoardList.types";

export default function BoardList() {
  const router = useRouter();

  const pushDetail = (e: any) => {
    router.push(`/boards/${e.target.parentNode.firstChild.innerText}`);
  };

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const list = data?.fetchBoards.map((el: IBoardList) => (
    <S.RowWrapper key={el.id}>
      <S.ColumnNumber>{el.id}</S.ColumnNumber>
      <S.ColumnTitle onClick={pushDetail}>{el.title}</S.ColumnTitle>
      <S.ColumnWriter>{el.writer}</S.ColumnWriter>
      <S.ColumnDate>{el.updatedAt.slice(0, 10)}</S.ColumnDate>
    </S.RowWrapper>
  ));

  const pushNew = () => {
    router.push("/boards/new");
  };

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.target instanceof Element) refetch({ page: Number(e.target.id) });
  };

  return (
    <BoardListUI list={list} pushNew={pushNew} onClickPage={onClickPage} />
  );
}
