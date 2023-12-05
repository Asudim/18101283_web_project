// 신규 게시글 작성 후 db에 저장
// 사진 및 동영상 


const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');

router.post('/write', function(request, response) {
	var title = request.body.title;
    var time = new Date();
    var year = time.getFullYear;
    var month = ('0'+ (time.getMonth()+1)).slice(-2);
    var day = ('0'+ (time.getDate())).slice(-2);
    var dateString = year + '-' + month + '-' + day;
	var text = request.body.text;
    var user = req.session.data;
	
	if (title && text) {
        sql_board.query('INSERT INTO data (title, date, user, text) VALUES(?,?,?,?)', [title, dateString, user, text],
            function (error, data) {
                if (error)
                  console.log(error);
                else
                  console.log(data);
        });
	}
    else {
		response.send('Please enter title or contents');
		response.end();
	}
});