const express = require('express')
const app = express()
const prot = 3000
const bodyParser = require("body-parser") //req.body.content 필요작업

const memos = [];

app.use(bodyParser.json()); //req.body.content 필요작업
// npm i body-parser 해주기

app.get('/api/memos', (req, res) => {
    res.send(memos)
})

app.post("/api/memos", (req, res) => {
    memos.push(req.body.content)
    res.send(memos)
})

app.put("/api/memos/:idx", (req, res) => {
    memos[req.idx] = (req.body.content);
    res.send(memos)
})



app.listen(prot, () => {
    console.log("서버가 실행중입니다 >_<!!")

})