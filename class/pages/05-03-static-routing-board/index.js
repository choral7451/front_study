import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  function onClickMove1() {
    router.push("/05-04-static-routed-board/83011");
  }

  function onClickMove2() {
    router.push("/05-04-static-routed-board/83012");
  }

  function onClickMove3() {
    router.push("/05-04-static-routed-board/83013");
  }

  return (
    <div>
      <button onClick={onClickMove1}>83011번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>83012번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>83013번 게시글로 이동하기</button>
    </div>
  );
}
