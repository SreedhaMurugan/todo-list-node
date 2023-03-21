// Importing express module
const express = require("express")
const app = express();
app.use(express.static('public'));

// Handling GET / request
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get("/data", (req, res) => {
    res.json([{id:1,name:'Sreedha'}]);
})

// Server setup
app.listen(3003, () => {
    console.log("Server is Running")
})