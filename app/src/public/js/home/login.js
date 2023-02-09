"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/"; //지정한 곳으로 루트 이동
      } else {
        alert(res.msg);
      }
    }).catch((err)=>{
      console.error(new Error("로그인 중 에러 발생"))
    })
}

/* Restful : API
 서버와 클라이언트간의 약속 중 하나가 restful


 <Rest : 사이트 구성원리>
 (정의) rest란?
  : 분산 시스템 설계를 위한 아케텍쳐(구성) 스타일
  : 네트워크 아키텍쳐 원리모음
  : 제약 조건의 집합
  : > 간단하게 [사이트 구성 원리]라고 이해하면 됨

  REpresentational (표현)
  State            (상태)
  Transter         (전송)
  =>자원의 표현을 가지고 상태를 전달한다.
  1.자원 : URL 
  2.표현 : Header (text/html, image/gif, test/* 등)
  3.상태 : Method (GET, POST, PUT, DELETE)

  <Restful : Rest(사이트 구성을 따르는)한 >
  <Restful API : Rest한 API>



*/
