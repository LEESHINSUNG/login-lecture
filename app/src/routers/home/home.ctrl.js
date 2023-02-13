"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req,res) => {
    res.render("home/register")
  }
};

// const users = {
//   id: ["hoodie", "신개발", "이팀장"],
//   psword: ["1234", "1234", "123456"],
// };
  
const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    // class를 직접사용 하고 변수에 접근할 때 그냥 사용하면 undefined가 뜸, 그래서 class가 있는 파일에서 static선언을 해줘야 변수에 접근 가능함
    const users = UserStorage.getUsers("id", "psword");
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
