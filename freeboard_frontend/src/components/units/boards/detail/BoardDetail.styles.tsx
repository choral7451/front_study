import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;
export const Header = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  padding-top: 30px;
`;
export const Title = styled.div`
  width: 70%;
`;
export const Writer = styled.div`
  width: 30%;
`;
export const Content = styled.div`
  text-align: center;
  padding-top: 30px;
  font-size: 20px;
  width: 80%;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 20px 20px;
  padding: 10px 30px;
`;

export const ButtonWrapper = styled.div``;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  width: 100%;
`;

export const ReviewHeader = styled.div`
  padding-top: 5%;
  width: 50%;
`;

export const ReviewWriter = styled.input`
  width: 30%;
  margin-right: 20px;
`;

export const ReviewContent = styled.textarea`
  margin-top: 20px;
  width: 50%;
`;

export const ReviewButton = styled.button`
  cursor: pointer;
  margin-left: 30px;
  width: 50px;
`;

export const ReviewListWrapper = styled.div`
  display: flex;
  width: 50%;
`;

export const ReviewListId = styled.div`
  width: 5%;
`;

export const ReviewListWriter = styled.div`
  width: 20%;
`;

export const ReviewListContent = styled.div`
  width: 35%;
`;

export const ReviewListStar = styled.div`
  width: 20%;
`;

export const ReviewListDate = styled.div`
  width: 20%;
`;
