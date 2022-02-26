import mongoose from 'mongoose'

let isConnected = false;

export const dbConnect =() => {
    if (!isConnected) {      
        await mongoose.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: true,
            useCreateIndex: true
        }).then(mongoose => {
            return mongoose
        })
    }
}