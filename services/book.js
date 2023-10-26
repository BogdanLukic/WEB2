var BookModel = require("../models/book")

var find = function(){
    return BookModel.find();
}

var findById = function(id){
    // return BookModel.findById(id); identicno kao ovo dole
    return BookModel.findOne({_id:id});
}

var save = function(body){
    if(body.title && body.yearOfPublication && body.author){
        return BookModel.saveBook({
            title:body.title,
            year: body.yearOfPublication,
            author: body.author
        })
    }
    else
        return false;
}

module.exports = {
    find,
    findById,
    save
}