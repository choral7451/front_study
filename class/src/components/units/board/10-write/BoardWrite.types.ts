import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IMyvariables {
  number: number;
  message?: string;
}

export interface IBoardWriteUIProps {
  onChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeMessage: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickGraphqlApi: () => void;
  onClickUpdate: () => void;
  _id: string;
  data: string;
  isEdit: boolean;
  boardData?: any;
}
