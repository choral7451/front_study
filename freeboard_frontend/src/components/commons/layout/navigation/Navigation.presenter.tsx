import styled from "@emotion/styled";
import { Fragment } from "react";

const Wrapper = styled.div`
  height: 50px;
  background-color: pink;
`;

export default function NavigationUI(props: any) {
  const NAVIGATION_MENUS = [
    { name: "게시판", page: "/boards" },
    { name: "마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
  ];

  return (
    <Wrapper>
      <div>{props.aaa}</div>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <button id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </button>
        </Fragment>
      ))}
    </Wrapper>
  );
}
