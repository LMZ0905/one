const express = require("express");
let server = express();
server.listen(8080);
// 压缩文件，如果有缓存直接用缓存304
server.use(express.static("template/ejs/"));

// 
server.use('/index',require("./router/index.js"));
server.use("/index/article",require("./router/article.js"));
server.use('/index/article/zuozhe',require('./router/user.js'))