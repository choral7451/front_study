import * as S from "../new/BoardNew.styles";

export default function BoardEditUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>게시물 수정</S.Title>
      <S.WriterAndPassword_Box>
        <S.Writer>
          <S.SubTitleText>작성자</S.SubTitleText>
          <S.WriterInput
            type="text"
            defaultValue={props.data?.fetchBoard.writer}
            onChange={props.onChangeWriter}
            readOnly={true}
          />
          <S.ErrorMessage>{}</S.ErrorMessage>
        </S.Writer>
        <S.Password>
          <S.SubTitleText>비밀번호</S.SubTitleText>
          <S.PasswordInput type="text" />
        </S.Password>
      </S.WriterAndPassword_Box>
      <S.SubTitle>
        <S.SubTitleText>제목</S.SubTitleText>
        <S.SubTitleInput
          type="text"
          defaultValue={props.data?.fetchBoard.title}
          onChange={props.onChangeTitle}
        />
        <S.ErrorMessage>{}</S.ErrorMessage>
      </S.SubTitle>
      <S.Content>
        <S.SubTitleText>내용</S.SubTitleText>
        <S.ContentInput
          type="text"
          defaultValue={props.data?.fetchBoard.content}
          onChange={props.onChangeContent}
        />
        <S.ErrorMessage></S.ErrorMessage>
      </S.Content>
      {/* <S.Address>
        <S.SubTitleText>주소</S.SubTitleText>
        <S.Zipcode_Box>
          <S.ZipcodeInput type="text" />
          <S.ZipcodeSearch>우편번호 검색</S.ZipcodeSearch>
        </S.Zipcode_Box>
        <S.AddressInput type="text" />
        <S.DetailedAddressInput type="text" />
      </S.Address> */}
      <S.Youtube>
        <S.SubTitleText>유튜브</S.SubTitleText>
        <S.YoutubeInput
          type="text"
          defaultValue={props.data?.fetchBoard.url}
          onChange={props.onChangeUrl}
        />
      </S.Youtube>
      {/* <S.Image>
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
        <S.CreateButton onClick={props.onClickUpdateBoard}>
          수정하기
        </S.CreateButton>
        <S.CreateButton onClick={props.pushDetail}>취소하기</S.CreateButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
