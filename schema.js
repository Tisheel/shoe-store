export const typeDefs = `#graphql

    type Product {
        _id: ID!
        title: String!
        images: [String!]!
        color: String!
        desc: String!
        sizes: [Int!]!
        price: Float!
        discount: Int
        quantity: Int!
    }

    type Order {
        _id: ID!
        email: String!
        phone: String!
        address: String!
        lat: String!
        lng: String!
        cart: [Product!]!
        amount: Float!
    }

    type Query {
        products: [Product]
        orders: [Order]
    }

    type Mutation {
        addProduct(product: AddProductInput): Product
        editProduct(_id: ID!,product: EditProductInput): Product
        deleteProduct(_id: ID!): Product
        createOrder(order: CreateOrderInput): Order
    }

    input AddProductInput {
        title: String!
        images: [String!]!
        color: String!
        desc: String!
        sizes: [Int!]!
        price: Float!
        discount: Int
        quantity: Int!
    }

    input EditProductInput {
        title: String
        images: [String]
        color: String
        desc: String
        sizes: [Int]
        price: Float
        discount: Int
        quantity: Int
    }

    input CreateOrderInput {
        email: String!
        phone: String!
        address: String!
        lat: String!
        lng: String!
        cart: [ID!]!
        amount: Float!
    }

    ` 