import * as S from "./BoardWrite.styles";

export default function BoardWriterUI(props) {
  return (
    <div>
      작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} />{" "}
      <br />
      제목: <S.WriterInput type="text" onChange={props.onChangetitle} /> <br />
      내용: <S.WriterInput type="text" onChange={props.onChangeContent} />
      <div>{props.data}</div>
      <S.SubmitButton
        onClick={props.onClickGraphqlApi}
        isActive={props.isActive}
      >
        Graphql-API 요청하기!!
      </S.SubmitButton>
    </div>
  );
}
