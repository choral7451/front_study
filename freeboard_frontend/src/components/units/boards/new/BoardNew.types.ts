import { ChangeEvent } from "react";

export interface IBoardNewUI {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateBoard: () => void;
  handleCancel: () => void;
  handleOk: () => void;
  showModal: () => void;
  handleComplete: (data: any) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  writerError: string;
  titleError: string;
  contentError: string;
  signup: () => void;
  pushList: () => void;
  zipcode: string;
  address: string;
}
