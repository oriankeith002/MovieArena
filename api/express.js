const express = require('express'); 
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const movieRoutes = require('./routes/movie.routes');

const app = express();

app.use(express.json());

app.use('/apiv1/user', userRoutes);
app.use('/apiv1/user', authRoutes);
app.use('/apiv1/movies', movieRoutes);


app.get('/test', (req,res) => {
    res.json('test ok')
}) 

module.exports = app;