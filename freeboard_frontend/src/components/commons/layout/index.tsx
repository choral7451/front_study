export default function Layout(props) {
  return (
    <>
      <div>여기는 헤더</div>
      <div>여기는 헤더</div>
      <div>여기는 헤더</div>
      <div>{props.children}</div>
    </>
  );
}
