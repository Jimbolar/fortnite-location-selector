const path = require('path');
const express = require('express');
const app = express();
// const PORT = 3000;

app.use('/client', express.static(path.join(__dirname + '/client')));

// express knows to serve the index.html from within a directory. The directory in this case is ../client.

app.get("/", (req, res) =>  {
    res.sendFile(path.join(__dirname + "/client/index.html"))
})

app.get("/butterpants", (req, res) => {
    console.log(req.path);
    const myResponse = { data: "hello from butterpants" };
    res.json(myResponse);
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
    console.log('error', req.path);
    res.status(404);
    res.json({ error: "you do not know de way" });
});

// app.use((req, res) => {
// res.status(404)
//   .send('Unknown Request');
// });

// app.listen(PORT, function(){
//     console.log(`Server is listening on port ${PORT}`);
// });
