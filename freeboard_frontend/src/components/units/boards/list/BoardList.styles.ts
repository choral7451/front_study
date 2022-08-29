import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Write = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
`;
export const WriteWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;
export const RowWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const Title = styled.div`
  padding: 50px 0;
  font-size: 50px;
`;

export const HederColumnNumber = styled.div`
  padding: 10px 0;
  font-size: 20px;
  width: 10%;
  text-align: center;
  font-weight: bold;
`;
export const HederColumnTitle = styled.div`
  padding: 10px 0;
  font-size: 20px;
  width: 50%;
  text-align: center;
  font-weight: bold;
`;
export const HederColumnWriter = styled.div`
  padding: 10px 0;
  font-size: 20px;
  width: 20%;
  text-align: center;
  font-weight: bold;
`;
export const HederColumnDate = styled.div`
  padding: 10px 0;
  font-size: 20px;
  width: 20%;
  text-align: center;
  font-weight: bold;
`;

export const ColumnNumber = styled.div`
  padding: 5px 0;
  width: 10%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  padding: 5px 0;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
export const ColumnWriter = styled.div`
  padding: 5px 0;
  width: 20%;
  text-align: center;
`;
export const ColumnDate = styled.div`
  padding: 5px 0;
  width: 20%;
  text-align: center;
`;
