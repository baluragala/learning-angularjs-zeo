var express=require('express')
var path=require('path')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.all('*',function(req,res){
  res.sendFile(path.join(__dirname, 'public','index.html'))
})

app.listen(8000,function(req,res){
  console.log('Server is running on 8000')
})
