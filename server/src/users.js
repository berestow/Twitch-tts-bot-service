require('dotenv').config();

const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const MONGO = process.env.MONGO;

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });

const User = new Schema(
    { 
        id: String, 
        accessToken: String, 
        refreshToken: String,
        user_id: String,
        login: String,
        display_name: String,
        image: String,
        user_link: String,
        users: Array,
        muteUsers: Array,
        type: String
    }
)

const Users = mongoose.model('Users', User);

module.exports = {
    Users
};