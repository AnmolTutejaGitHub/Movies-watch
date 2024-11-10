require('dotenv').config();
const express = require('express');
const app = express();
require('../db/mongoose');
const User = require('../db/Model/User');
const bcrypt = require('bcrypt');
const cors = require('cors');

const PORT = process.env.PORT || 6969;

app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}));

app.use(express.json());

app.post('/login', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = await User.findOne({ email, name });
        if (!user) {
            return res.status(400).send({ error: "Invalid Credentials" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).send({ error: "Invalid Credentials" });
        }

        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.post('/signups', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = new User({ email, password, name });
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})


app.post('/addtoWatchlist', async (req, res) => {
    const { movie, user } = req.body;
    const usr = await User.findOne({ name: user });
    const movieExists = usr.watchList.some(watchedMovie => watchedMovie.id === movie.id);
    if (movieExists) return res.status(200).send(movie);
    usr.watchList.push(movie);
    await usr.save();
    res.status(200).send(movie);
})

app.post('/getWatchList', async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ name: username });
    res.status(200).send(user.watchList);
})

app.post('/delWatchList', async (req, res) => {
    const { username, movie_id } = req.body;
    const user = await User.findOne({ name: username });
    user.watchList = user.watchList.filter(movie => movie.id !== movie_id);
    await user.save();
    res.status(200).send({ message: "Movie deleted from watchlist" });
})


app.post('/getuser', async (req, res) => {
    const username = req.body.user;
    try {
        const user = await User.findOne({ name: username });
        if (!user) return res.status(400).send({ message: 'user does not exist' });

        res.status(200).send(user);
    }
    catch (e) {
        res.status(400).send({ message: "user does not exist" });
    }
})



app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})