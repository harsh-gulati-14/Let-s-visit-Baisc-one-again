// basic demo to strcuture of api

const request =require('request')
request('...........',function(error,response,body){
    if(error)
    {
        console.log('404');
    }
    if(!error && response.statusCode==200)
    {
        console.log('.......')
    }
})