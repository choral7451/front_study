import { useQuery, gql, useMutation } from "@apollo/client";
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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Float!) {
    deleteBoard(number: $number)
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function index() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BAORDS);

  const onClickDelete = (e) => {
    console.log(e.target.id);
    deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{ query: FETCH_BAORDS }],
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el.number}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{el.message}</MyColumn>
          <MyColumn>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
