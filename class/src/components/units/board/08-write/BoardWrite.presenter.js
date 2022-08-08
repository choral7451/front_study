import * as S from "./BoardWrite.styles";

export default function BoardWriterUI(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
      번호: <S.WriterInput type="text" onChange={props.onChangeNumber} /> <br />
      메시지: <S.WriterInput type="text" onChange={props.onChangeMessage} />
      <div>{props.data}</div>
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickGraphqlApi}
      >
        {props.isEdit ? "수정페이지" : "등록페이지"}하기
      </button>
    </div>
  );
}
