import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  CREATE_REVIEW,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_REVIEWS,
} from "./BoardDetail.queries";
import { IReviewList } from "./BoardDetail.types";
import * as S from "./BoardDetail.styles";

export default function BoardDetail() {
  const router = useRouter();

  const [createReview] = useMutation(CREATE_REVIEW);
  const [deleteBaord] = useMutation(DELETE_BOARD);

  const [reviewWriter, setReviewWriter] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [starValue, setStarValue] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const { data } = useQuery(FETCH_BOARD, {
    variables: { id: Number(router.query.number) },
  });

  const review = useQuery(FETCH_REVIEWS, {
    variables: { id: Number(router.query.number) },
  });

  function getReview() {}
  async function onClickDeleteBoard() {
    await deleteBaord({
      variables: { id: Number(router.query.number) },
    });
    router.push(`/boards`);
  }

  const pushList = () => {
    router.push(`/boards`);
  };

  async function onClickCreateReview() {
    await createReview({
      variables: {
        writer: reviewWriter,
        content: reviewContent,
        star: starValue,
        pageNum: Number(router.query.number),
      },

      refetchQueries: [
        {
          query: FETCH_REVIEWS,
          variables: { id: Number(router.query.number) },
        },
      ],
    });
  }

  function onChangeReviewWriter(e: ChangeEvent<HTMLInputElement>) {
    setReviewWriter(e.target.value);
  }

  function onChangeReviewContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setReviewContent(e.target.value);
  }

  const reviewList = review.data?.fetchReviews.map((el: IReviewList) => (
    <S.ReviewListWrapper key={el.id}>
      <S.ReviewListId>{el.id}</S.ReviewListId>
      <S.ReviewListWriter>{el.writer}</S.ReviewListWriter>
      <S.ReviewListContent>{el.content}</S.ReviewListContent>
      <S.ReviewListStar>{el.star}</S.ReviewListStar>
      <S.ReviewListDate>{el.updatedAt}</S.ReviewListDate>
    </S.ReviewListWrapper>
  ));

  return (
    <BoardDetailUI
      data={data}
      reviewList={reviewList}
      pushList={pushList}
      onClickDeleteBoard={onClickDeleteBoard}
      desc={desc}
      setStarValue={setStarValue}
      starValue={starValue}
      onClickCreateReview={onClickCreateReview}
      onChangeReviewWriter={onChangeReviewWriter}
      onChangeReviewContent={onChangeReviewContent}
    />
  );
}
