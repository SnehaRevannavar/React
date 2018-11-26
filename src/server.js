var express = require('express'),
    app=express(),
    cors=require('cors');

app.use(cors({
    origin:'http://localhost:3000'
}));

app.listen(4000,function(){
    console.log('Server is running @ localhost:4000');
});

app.get('/getusers',function(req,res){
    res.send([
    {username:'User1',location:'Location1'},
    {username:'User2',location:'Location2'}    
]);
});