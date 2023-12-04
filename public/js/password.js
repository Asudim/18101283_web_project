// find.js에서 받은 정보로 패스워드 반환
const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');

router.get('/password', function(request, response) {
    // Retrieve the password from the query parameter
    const retrievedPassword = request.query.password;

    // Render the password page with the retrieved password
    response.render('password', { password: retrievedPassword });
});


module.exports = router;