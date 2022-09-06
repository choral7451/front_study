import React from "react";
import * as S from "./BoardList.styles";

export default function BoardListUI(props: any) {
  return (
    <S.PageWrapper>
      <S.Title>게시판</S.Title>
      <S.WriteWrapper>
        <S.Write onClick={props.pushNew}>글쓰기</S.Write>
      </S.WriteWrapper>
      <S.RowWrapper>
        <S.HederColumnNumber>번호</S.HederColumnNumber>
        <S.HederColumnTitle>제목</S.HederColumnTitle>
        <S.HederColumnWriter>작성자</S.HederColumnWriter>
        <S.HederColumnDate>작성일</S.HederColumnDate>
      </S.RowWrapper>
      {props.list}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <span
          id="1"
          onClick={props.onClickPage}
          style={{ margin: "0 20px", cursor: "pointer" }}
        >
          1
        </span>
        <span
          id="2"
          onClick={props.onClickPage}
          style={{ margin: "0 20px", cursor: "pointer" }}
        >
          2
        </span>
        <span
          id="3"
          onClick={props.onClickPage}
          style={{ margin: "0 20px", cursor: "pointer" }}
        >
          3
        </span>
      </div>
    </S.PageWrapper>
  );
}
