const express =require('express');
const bodyParser = require('body-parser');
const app =express();
const port = process.env.port || 5000;

app.use(bodyParser.json());//기본적으로 REST API 에서는 데이터 주고받을때 json 데이터 형식으로 주고받음
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
          'id':1,
          'image' : 'https://placeimg.com/64/64/1', 
          'name' : '박은실',
          'birthday' : '941122',
          'gender' : '여자',
          'job' : '취준생'
        },
        {
          'id':2,
          'image' : 'https://placeimg.com/64/64/2', 
          'name' : '홍길동',
          'birthday' : '941122',
          'gender' : '여자',
          'job' : '취준생'
        },
        {
          'id':3,
          'image' : 'https://placeimg.com/64/64/3', 
          'name' : '이순신',
          'birthday' : '941122',
          'gender' : '여자',
          'job' : '취준생'
        }
      ]);
});


app.listen(port, ()=> console.log(`listening on port ${port}`));