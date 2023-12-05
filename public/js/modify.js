// 원본 게시글 로드 후 수정 삭제 기능 제공

const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');

// loopkup에서 받아온 정보에 대해 sql 수행

// text박스에 기존 text와 title 불러오기 후 수정 기능
// 이후 저장