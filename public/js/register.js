// db에 회원가입 정보 저장
const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');


router.post('/register', function(request, response) {
	var username = request.body.username;
    var userid = request.body.userid;
	var password = request.body.password;
	var email = request.body.email;
	
	if (username && userid && password && email) {
		connection.query('SELECT * FROM user WHERE username = ? AND userid = ? AND password = ? AND email = ?', [username, userid, password, email], function(error, results, fields) {
			if (error) throw error;
			if (results.length <= 0) {
        connection.query('INSERT INTO user (username, userid, password, email) VALUES(?,?,?,?)', [username, userid, password, email],
            function (error, data) {
                if (error)
                  console.log(error);
                else
                  console.log(data);
        });
			  response.send(userid + 'Registered Successfully!<br><a href="/login"></a>');
			} else {
				response.send('Already exists!<br><a href="/login"></a>');
			}			
			response.end();
		});
	} else {
		response.send('Please enter User Information!');
		response.end();
	}
});

module.exports = router;