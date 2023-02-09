"use strict";

class UserStorage {
  static #users = {
    id: ["hoodie", "신개발", "이팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["후디", "신개발", "이팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;

// class 안에서는 변수선언 필요없음
