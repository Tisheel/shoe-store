import { Schema, Types, model } from "mongoose"

const orderSchema = new Schema({
    email: String,
    phone: String,
    address: String,
    lat: String,
    lng: String,
    cart: [
        {
            type: Types.ObjectId,
            ref: 'products'
        }
    ],
    amount: Number,
})

const Order = model('order', orderSchema)
export default Order