import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardNewUI from "./BoardNew.presenter";
import { CREATE_BOARD } from "./BoardNew.queries";

export default function BoardNew() {
  const router = useRouter();

  const [isModalVisible, setIsModalvisible] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [createBaord] = useMutation(CREATE_BOARD);

  function onChangeWriter(e: ChangeEvent<HTMLInputElement>) {
    setWriter(e.target.value);
  }

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  function onChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  async function onClickCreateBoard() {
    const result = await createBaord({
      variables: {
        writer,
        title,
        content,
        url,
        zipcode,
        address,
        addressDetail,
      },
    });
    router.push(`/boards/${result.data.createBoard}`);
  }

  function pushList() {
    router.push("/boards");
  }

  function signup() {
    if (!writer) {
      setWriterError("이름을 입력해 주세요.");
    } else {
      setWriterError("");
    }

    if (!title) {
      setTitleError("제목을 입력해 주세요.");
    } else {
      setTitleError("");
    }

    if (!content) {
      setContentError("내용을 입력해 주세요.");
    } else {
      setContentError("");
    }

    if (!writer || !title || !content) {
      alert("내용을 확인해주세요.");
    } else {
      onClickCreateBoard();
    }
  }

  function showModal() {
    setIsModalvisible(true);
  }

  function handleOk() {
    setIsModalvisible(false);
  }

  function handleCancel() {
    setIsModalvisible(false);
  }

  function handleComplete(data: any) {
    console.log(data);
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsModalvisible(false);
  }

  function onChangeAddressDetail(e: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(e.target.value);
  }

  return (
    <BoardNewUI
      handleComplete={handleComplete}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      showModal={showModal}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeWriter={onChangeWriter}
      onClickCreateBoard={onClickCreateBoard}
      onChangeUrl={onChangeUrl}
      writerError={writerError}
      titleError={titleError}
      contentError={contentError}
      zipcode={zipcode}
      address={address}
      onChangeAddressDetail={onChangeAddressDetail}
      signup={signup}
      pushList={pushList}
    />
  );
}
