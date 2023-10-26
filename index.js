const express = require("express");
const config = require("./config/config");
const app =  express()

const mongoose = require("mongoose");
mongoose.connect(config.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true });

const bookRoutes = require("./routes/book");

app.use(express.json())
app.use("/books",bookRoutes)
// app.use("/",bookRoutes) ako bude ovako izvrsice GET BOOKS jer je pre definisana

app.get("/",(req, res)=>{
    res.send("Hello World");
})

app.listen(config.port, ()=>{
    console.log(`Server startovan na portu ${config.port}`);
})