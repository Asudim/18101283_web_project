// db에 저장된 정보로 아이디 비번 찾기 기능.
const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');

router.post('/find', function(request, response) {
	var userid = request.body.userid;
	var email = request.body.email;
	if (userid && email) {
		sql_login.query('SELECT * FROM user WHERE userid = ? AND email = ?', [userid, email], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
                const retrievedPassword = results[0].password;
                response.redirect(`/password?password=${encodeURIComponent(retrievedPassword)}`);
                
			} else {
				response.send('Incorrect UserID or Email');
			}			
		});
	} else {
		response.send('Please enter UserID or Emai');
	}
});

module.exports = router;