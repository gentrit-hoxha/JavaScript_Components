const http = require('http');



const server = http.createServer((req,res) => {
      
    const url = req.url;
    if(url === '/'){
      
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>the title of the document</title> </head>');
        res.write('<body> <form action="admin" method="POST"> <input type="text"> <input type="submit" value="LOGIN"> </form> </body>');
        res.write('</html>');
        
       return res.end();
    }

     
    if(url === '/admin') {
        res.write('<html>');
         res.write('<head><title>the title of the document</title> </head>');
         res.write('<body><h1>The admin dashboard</h1> </body>');
         res.write('</html>');
         res.end();
    }

         
 
    
        
});

server.listen(3000);


