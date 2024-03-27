import { Schema, model } from "mongoose"

const productSchema = new Schema({
    title: String,
    images: [String],
    color: String,
    desc: String,
    sizes: [Number],
    price: Number,
    discount: Number,
    quantity: Number
})

const Product = model('product', productSchema)
export default Product