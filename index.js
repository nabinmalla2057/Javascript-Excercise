// Create a nodejs server that prints hello world
/*
3 types

1.Inbuilt nodejs modules (http,fs,os,path,....)
2.Custom node js modules(`Cretate your own by using`)
3.Npm packsages(Library use)

*/

const http = require("http"); // nodejs inbuilt package

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); //html tag
    res.write("<h1>Hello World, NaBiN</h1>"); //Body
    res.end();
  })
  .listen(3333);

console.log("App is running on port 3333");

// localhost:5555 in Browser
