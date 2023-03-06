"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해주세요")
  if(psword.value !== confirmPsword.value)  {
    console.log(psword);
    console.log(confirmPsword.value);
    return alert("비밀번호가 일치하지 않습니다.")
  }
  
  const req = {
    id: id.value,
    psword: psword.value,
    name: name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login"; //지정한 곳으로 루트 이동
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
