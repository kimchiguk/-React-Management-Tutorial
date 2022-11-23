var express = require('express');
// const bodyParser = require('body-parser');
var app = express();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello',(req,res) =>{

res.send({
    massage:'Hello Express!'
});

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

