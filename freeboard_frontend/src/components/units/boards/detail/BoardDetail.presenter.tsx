import React, { useState } from "react";
import * as S from "./BoardDetail.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function BoardDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>제목 : {props.data?.fetchBoard.title}</S.Title>
        <S.Writer>글쓴이 : {props.data?.fetchBoard.writer}</S.Writer>
      </S.Header>
      <S.Content>
        {props.data?.fetchBoard.content}
        {props.data?.fetchBoard.url && (
          <S.Youtube
            url={props.data?.fetchBoard.url}
            width="486px"
            heigth="240px"
          />
        )}
      </S.Content>
      <S.ReviewWrapper>
        {props.reviewList}
        <S.ReviewHeader>
          이름 : <S.ReviewWriter onChange={props.onChangeReviewWriter} />
          <span>
            <Rate
              tooltips={props.desc}
              onChange={props.setStarValue}
              value={props.starValue}
            />
          </span>
          <S.ReviewButton onClick={props.onClickCreateReview}>
            등록
          </S.ReviewButton>
        </S.ReviewHeader>
        <S.ReviewContent onChange={props.onChangeReviewContent} />
      </S.ReviewWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickDeleteBoard}>삭제</S.Button>
        <S.Button onClick={props.pushEdit}>수정</S.Button>
        <S.Button onClick={props.pushList}>목록</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
