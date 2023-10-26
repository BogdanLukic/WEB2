const express = require('express')
const bookService = require("../services/book")

const router = express.Router()

// ovako mora jer je asinhrono, mora da se saceka pa da se vrati, prakticno kazemo sacekaj bookService.find()
router.get("/", async (req,res)=>{
    var books = await bookService.find();
    res.send(books);
})

router.get("/:id", async (req,res)=>{
    var book = await bookService.findById(req.params.id)
    res.send(book)
})

router.post("/",(req,res)=>{
    response = bookService.save(req.body)
    res.send(response);
})

module.exports = router