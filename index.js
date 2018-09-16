const path = require('path');
const express = require('express');
const app = express();

app.get("/butterpants", (req, res) => {
    console.log(req.path);
    const myResponse = { data: "hello from butterpants" };
    res.json(myResponse);
})

app.use("/client", express.static(path.join(__dirname + "/client")));

app.get("/", (req, res) =>  {
    res.sendFile(path.join(__dirname + "/client/index.html"))
})

app.get("*", (req, res) => {
    console.log(req.path);
    res.json({ error: "you do not know de way" });
})

app.listen(3000, function(){
    console.log("server started on port 3000");
})
