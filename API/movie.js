const express=require("express")
const app=express()
const request=require('request')
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("search")
})
app.get('/result',(req,res)=>{
    const search=req.query.search
    request('http://www.omdbapi.com/?s='+search+'%27&apikey=50bb86a1' ,function(err,resp,body){
        if(err)
        {
            console.log(404);
            res.send('error');
        }
        else{
            var data=JSON.parse(body)
            res.render("result",{data:data})
        }
    })
})
app.listen(3000)
{
    console.log('server is up')
}