const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/products')

//model
const Product = mongoose.model('Product',{
    id:String,
    uname:String,
    author:String,
    description:String,
    price:Number,
    available:String,
    image:String,
    website:String
    
})
// 
module.exports={
    Product
}   

