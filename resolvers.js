import { GraphQLError } from "graphql"
import Product from "./db/models/Product.js"
import Order from "./db/models/Order.js"

export const resolvers = {
    Query: {
        async products() {
            try {
                const products = await Product.find()
                if (products.length === 0) {
                    return new GraphQLError('No Products Found.', {
                        extensions: {
                            code: 'NO_PRODUCTS_FOUND'
                        }
                    })
                }
                return products
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        },
        async orders() {
            try {
                const orders = await Order.find()
                if (orders.length === 0) {
                    return new GraphQLError('No Orders Found.', {
                        extensions: {
                            code: 'NO_ORDERS_FOUND'
                        }
                    })
                }
                return orders
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        }
    },
    Order: {
        async cart(parent){
            try {
                const products = await Product.find({_id: parent.cart})
                return products
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        }
    }
    ,
    Mutation: {
        async addProduct(_, { product }, context) {
            try {
                const newProduct = await Product(product)
                await newProduct.save()
                return newProduct
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        },
        async editProduct(_, { _id, product }, context) {
            try {
                const updatedProduct = await Product.findByIdAndUpdate(_id, product)
                return updatedProduct
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        },
        async deleteProduct(_, { _id }, context) {
            try {
                const deletedProduct = await Product.findByIdAndDelete(_id)
                if (deletedProduct === null) {
                    return new GraphQLError('No Product Found for ID.', {
                        extensions: {
                            code: 'NO_PRODUCT_FOUND'
                        }
                    })
                }
                return deletedProduct
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        },
        async createOrder(_, { order }, context) {
            try {
                const newOrder = await Order(order)
                await newOrder.save()
                return newOrder
            } catch (error) {
                return new GraphQLError('Somthing went wrong.', {
                    extensions: {
                        code: 'SMTHING_WENT_WRONG'
                    }
                })
            }
        }
    }
}