// 로그인 기능 회원가입, 아이디 비번 찾기 버튼

const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');


router.post('/login', function(request, response) {
	var userid = request.body.userid;
	var password = request.body.password;
	if (userid && password) {
		sql_login.query('SELECT * FROM user WHERE userid = ? AND password = ?', [userid, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				response.redirect('/board');
			} else {
				response.send('Incorrect UserID or Password');
			}			
		});
	} else {
		response.send('Please enter UserID and Password!');
	}
});
// session 추가하여 로그인 후 정보 저장. 

module.exports = router;
