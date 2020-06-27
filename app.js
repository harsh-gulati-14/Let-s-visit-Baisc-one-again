const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("hey get request")
})
app.get('*',(req,res)=>{
    res.send('ANYTHING WILL GET IT') // * means anything thata user want;s to enter it will send this response
})
app.get('/e/:get',(req,res)=>{
    res.send('Working as user told') // : make it variable and the value form there will get to theta page only
})
app.listen(3000)
{
    console.log('server is up')
}