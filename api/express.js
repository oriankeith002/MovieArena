const express = require('express'); 
const cookieParser = require('cookie-parser');
const cors = require('cors')

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const movieRoutes = require('./routes/movie.routes');
const commentRoutes = require('./routes/comments.routes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.use('/apiv1/user', userRoutes);
app.use('/apiv1/user', authRoutes);
app.use('/apiv1/movies', movieRoutes);
app.use('/apiv1/comments',commentRoutes);
app.use('/uploads', express.static(__dirname+'/uploads'));


app.get('/test', (req,res) => {
    res.json('test ok')
}) 

module.exports = app;