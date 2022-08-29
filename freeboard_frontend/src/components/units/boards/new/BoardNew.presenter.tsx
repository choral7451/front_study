import React from "react";
import * as S from "./BoardNew.styles";
import { IBoardNewUI } from "./BoardNew.types";

export default function BoardNewUI(props: IBoardNewUI) {
  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>
      <S.WriterAndPassword_Box>
        <S.Writer>
          <S.SubTitleText>작성자</S.SubTitleText>
          <S.WriterInput type="text" onChange={props.onChangeWriter} />
          <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
        </S.Writer>
        <S.Password>
          <S.SubTitleText>비밀번호</S.SubTitleText>
          <S.PasswordInput type="text" />
        </S.Password>
      </S.WriterAndPassword_Box>
      <S.SubTitle>
        <S.SubTitleText>제목</S.SubTitleText>
        <S.SubTitleInput type="text" onChange={props.onChangeTitle} />
        <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
      </S.SubTitle>
      <S.Content>
        <S.SubTitleText>내용</S.SubTitleText>
        <S.ContentInput type="text" onChange={props.onChangeContent} />
        <S.ErrorMessage>{props.contentError}</S.ErrorMessage>
      </S.Content>
      {/* <S.Address>
        <S.SubTitleText>주소</S.SubTitleText>
        <S.Zipcode_Box>
          <S.ZipcodeInput type="text" />
          <S.ZipcodeSearch>우편번호 검색</S.ZipcodeSearch>
        </S.Zipcode_Box>
        <S.AddressInput type="text" />
        <S.DetailedAddressInput type="text" />
      </S.Address>
      <S.Youtube>
        <S.SubTitleText>유튜브</S.SubTitleText>
        <S.YoutubeInput type="text" />
      </S.Youtube>
      <S.Image>
        <S.SubTitleText>사진 첨부</S.SubTitleText>
        <S.ImpagePush_Box>
          <S.ImagePush>
            <S.UploadPlus>+</S.UploadPlus>
            Upload
          </S.ImagePush>
          <S.ImagePush>
            <S.UploadPlus>+</S.UploadPlus>
            Upload
          </S.ImagePush>
          <S.ImagePush>
            <S.UploadPlus>+</S.UploadPlus>
            Upload
          </S.ImagePush>
        </S.ImpagePush_Box>
      </S.Image>
      <S.MainSetting>
        <S.SubTitleText>메인 설정</S.SubTitleText>
        <S.Radio_Box>
          <input type="radio" id="youtube" name="youtube" value="youtube" />
          <S.RadioText>유튜브</S.RadioText>
          <input type="radio" id="image" name="image" value="image" />
          <S.RadioText>이미지</S.RadioText>
        </S.Radio_Box>
      </S.MainSetting> */}
      <S.ButtonWrapper>
        <S.CreateButton onClick={props.signup}>등록하기</S.CreateButton>
        <S.CreateButton onClick={props.pushList}>취소하기</S.CreateButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
