const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Mern_chat_app:Sandesh2001@cluster0.j28fpbd.mongodb.net/chat-app?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
