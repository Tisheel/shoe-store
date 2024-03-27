import mongoose from "mongoose"


const connetToMongoDb = async () => {
    try {
        // please dont use my mongo url, i am lazy to create a .env for that...
        await mongoose.connect('mongodb+srv://tisheel:tisheel@cluster0.zu2wgfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB connected Successfully.')
    } catch (error) {
        console.log(error)
        console.log('Error connecting to DB.')
    }
}

export default connetToMongoDb