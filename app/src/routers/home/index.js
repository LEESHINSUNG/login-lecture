"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); 

module.exports = router;

// router는 도메인(주소)로 접속했을 때 클라이언트의 요청을 연결해 주는 부분이다.
