const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')

const app = express();
dotenv.config();
connectDB();
app.use(express.json())

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


app.get('/', (req,res) => {
    res.send("Api is running.......");
})



// app.get('/api/notes', (req,res) => {
//     res.json(notes);
// })

app.use('/api/users' ,userRoutes);
app.use('/api/admin', adminRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`server at ${PORT}`));   