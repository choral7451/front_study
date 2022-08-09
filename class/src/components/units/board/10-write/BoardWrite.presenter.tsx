import { ChangeEvent } from "react";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriterUI(props: IBoardWriteUIProps) {
  return (
    <div>
      <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
      번호:{" "}
      <S.WriterInput
        type="text"
        onChange={props.onChangeNumber}
        defaultValue={props.boardData?.fetchBoard.number}
      />{" "}
      <br />
      메시지:{" "}
      <S.WriterInput
        type="text"
        onChange={props.onChangeMessage}
        defaultValue={props.boardData?.fetchBoard.message}
      />
      <div>{props.data}</div>
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickGraphqlApi}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </button>
    </div>
  );
}
