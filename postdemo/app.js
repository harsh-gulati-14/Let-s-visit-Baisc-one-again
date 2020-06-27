const express=require("express")
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
var friends=['harsh','gulati'];
app.get('/',(req,res)=>{
    res.send("hey get request")
})
app.get('/friends',(req,res)=>{
    res.render('friend.ejs',{friends:friends})
})
app.post('/post',(req,res)=>{
    const newf=req.body.newf
    console.log(req.body)
    friends.push(newf)
    res.send('REACHED')
})
app.listen(3000)
{
    console.log('server is up')
}