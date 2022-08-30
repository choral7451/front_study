import { ChangeEvent } from "react";

export interface IBoardDetailUI {
  data: {
    fetchBoard: {
      id: string;
      writer: string;
      title: string;
      content: string;
    };
  };
  desc: string[];
  pushList: () => void;
  onClickDeleteBoard: () => void;
  setStarValue: any;
  starValue: number;
  onClickCreateReview: () => void;
  onClickEditBoard: () => void;
  onChangeReviewWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeReviewContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IReviewList {
  id: string;
  writer: string;
  content: string;
  updatedAt: string;
  star: number;
}
