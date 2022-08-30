import { ChangeEvent } from "react";

export interface IBoardNewUI {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateBoard: () => void;
  writerError: string;
  titleError: string;
  contentError: string;
  signup: () => void;
  pushList: () => void;
}
