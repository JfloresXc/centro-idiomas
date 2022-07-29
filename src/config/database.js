import mongoose from 'mongoose';

export default () => {
    const { DB_URI } = process.env
    mongoose.connect(DB_URI, {

    })
        .then(() => console.log('Database connected'))
        .catch((error) => console.log(error))
}