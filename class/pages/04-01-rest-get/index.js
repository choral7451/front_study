import { useState } from "react";
import axios from "axios";

export default function RestGetPage() {
  const [data, setData] = useState("");
  async function onClickRestApi() {
    const result = await axios.get("https://koreanjson.com/posts/1");

    setData(result.data.title);
  }

  return (
    <div>
      <div>{data}</div>
      <button onClick={onClickRestApi}>REST-API 요청하기!!</button>
    </div>
  );
}
