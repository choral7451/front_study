import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BAORDS = gql`
  query {
    fetchBoards {
      _id
      number
      message
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function index() {
  const { data } = useQuery(FETCH_BAORDS);
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{el.message}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
