

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const userRouter = require("./routes/userRoutes");
const formRouter = require("./routes/formRoutes");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());


app.use("/api",userRouter);
app.use("/api",formRouter);



const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mail2anjalisingh2610:bdoGQWTEBNpEze8p@cluster0.ybo0zd5.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add any other options as needed
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Call connectDB function
connectDB();

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});