import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBaord($number: Float!) {
    fetchBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83013 },
  });

  return (
    <div>
      <div>{data?.fetchBoard.number}번 게시글에 오신것을 환영합니다.</div>
      <div>{data?.fetchBoard.message}</div>
    </div>
  );
}
