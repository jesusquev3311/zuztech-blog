const path = require("path");
const express = require("express");
const app = new express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, "views/index.html"));
});
app.get("/about", (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, "views/about.html"));
});
app.get("/post", (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, "views/post.html"));
});
app.listen(3000);
