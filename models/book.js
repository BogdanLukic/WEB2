const mongoose = require("mongoose")

var BookSchema = mongoose.Schema({
    title: {type: String, require:true},
    year: {type: Number, require:true},
    author: {type: String, require:true},
})

var BookModel = mongoose.model('book', BookSchema)  // Pravi kolekciju, dodaje na book + s

BookModel.saveBook = function(book){
    var newBook = new BookModel(book)
    newBook.save()
    return true
}

module.exports = BookModel