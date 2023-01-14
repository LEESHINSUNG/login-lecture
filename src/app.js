"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routers/home"); // 이미 만든 js폴더를 불러오기 위함. 폴더 위치를 상대적으로 명시해주어야함

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use ->  미들웨어를 등록해주는 메서드

module.exports = app;
