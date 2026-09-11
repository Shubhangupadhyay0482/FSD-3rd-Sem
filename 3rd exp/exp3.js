const http=require('http');//import http module
const server=http.createserver((req,res)=>{
    res.end("Hello World");
    res.writehead(200,{
        'Content-Type':'text/plain',
        "server":"Node.js"

    });
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

