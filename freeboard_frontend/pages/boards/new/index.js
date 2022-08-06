import { useState } from "react";
import {
  Wrapper,
  Address,
  AddressInput,
  Content,
  ContentInput,
  CreateButton,
  DetailedAddressInput,
  Image,
  ImagePush,
  ImpagePush_Box,
  MainSetting,
  Password,
  PasswordInput,
  SubTitleText,
  Title,
  Writer,
  WriterAndPassword_Box,
  WriterInput,
  ZipcodeInput,
  ZipcodeSearch,
  Zipcode_Box,
  SubTitle,
  SubTitleInput,
  YoutubeInput,
  Youtube,
  UploadPlus,
  Radio_Box,
  RadioText,
  ErrorMessage,
} from "../../../styles/board_new";

export default function index() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function signup() {
    if (title === "") {
      setTitleError("제목을 입력해 주세요.");
    } else {
      setTitleError("");
    }

    if (content === "") {
      setContentError("내용을 입력해 주세요.");
    } else {
      setContentError("");
    }
  }

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterAndPassword_Box>
        <Writer>
          <SubTitleText>작성자</SubTitleText>
          <WriterInput type="text" />
        </Writer>
        <Password>
          <SubTitleText>비밀번호</SubTitleText>
          <PasswordInput type="text" />
        </Password>
      </WriterAndPassword_Box>
      <SubTitle>
        <SubTitleText>제목</SubTitleText>
        <SubTitleInput type="text" onChange={onChangeTitle} />
        <ErrorMessage>{titleError}</ErrorMessage>
      </SubTitle>
      <Content>
        <SubTitleText>내용</SubTitleText>
        <ContentInput type="text" onChange={onChangeContent} />
        <ErrorMessage>{contentError}</ErrorMessage>
      </Content>
      <Address>
        <SubTitleText SubTitleText>주소</SubTitleText>
        <Zipcode_Box>
          <ZipcodeInput type="text" />
          <ZipcodeSearch>우편번호 검색</ZipcodeSearch>
        </Zipcode_Box>
        <AddressInput type="text" />
        <DetailedAddressInput type="text" />
      </Address>
      <Youtube>
        <SubTitleText>유튜브</SubTitleText>
        <YoutubeInput type="text" />
      </Youtube>
      <Image>
        <SubTitleText>사진 첨부</SubTitleText>
        <ImpagePush_Box>
          <ImagePush>
            <UploadPlus>+</UploadPlus>
            Upload
          </ImagePush>
          <ImagePush>
            <UploadPlus>+</UploadPlus>
            Upload
          </ImagePush>
          <ImagePush>
            <UploadPlus>+</UploadPlus>
            Upload
          </ImagePush>
        </ImpagePush_Box>
      </Image>
      <MainSetting>
        <SubTitleText>메인 설정</SubTitleText>
        <Radio_Box>
          <input type="radio" id="youtube" name="youtube" value="youtube" />
          <RadioText>유튜브</RadioText>
          <input type="radio" id="image" name="image" value="image" />
          <RadioText>이미지</RadioText>
        </Radio_Box>
      </MainSetting>
      <CreateButton onClick={signup}>등록하기</CreateButton>
    </Wrapper>
  );
}
