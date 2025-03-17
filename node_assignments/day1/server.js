const http = require("http");
const file = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
        const filePath = path.join(__dirname,'/todo.html');

        file.readFile(filePath,(err,data)=>{
            if (err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Server Error");

            }else{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end(data);
            }
        })
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});x