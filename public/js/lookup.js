//클릭한 게시글의 정보를 db에서 가져와 나타내고 

const express = require("express")
const router = express.Router();

const { sql_login, sql_board } = require('../../home');

// board에서 Post_id 받아와서 sql에 검색

const page =fs.readFileSync('../ejs/board.ejs','utf8');

router.post('/getdata', (req, res)=> {
    var post_id = request.session.post_id;
    sql_board.query("SELECT * from data WHERE post_id == post_id;", function(error,result,fileds){
        if(error) throw error;
        else{
            // result에서 불러오고 render;
        }


    });
});
router.post('/modify',(req,res)=>{
    //modify.html로 이동
    //세션에서 유저id와 작성자가 일치할경우에만 나타남
})

router.post('/delete',(req,res)=>{
    // sql에서 삭제
})

module.exports = router;
