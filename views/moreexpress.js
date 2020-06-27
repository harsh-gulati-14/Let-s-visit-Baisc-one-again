const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("hey get request")
})
app.get('/e/:get',(req,res)=>{
    const get=req.params.get
    res.render('home.ejs',{get:get}) // : make it variable and the value form there will get to theta page only
})
app.listen(3000)
{   
    console.log('server is up')
}