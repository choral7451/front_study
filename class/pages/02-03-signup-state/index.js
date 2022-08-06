import React, { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onClickSignup() {
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      setEmailError("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} /> <br />
      <div>{emailError}</div>
      비밀번호: <input type="text" onChange={onChangePassword} /> <br />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
