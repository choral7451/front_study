import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationUI from "./Navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
