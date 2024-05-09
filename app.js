const express = require('express');
const app = express();

// get, post, put, patch, delete
//  192.168.45.131:3000/ <=> localhost:3000/

app.use(express.json());

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

app.use("/users",userRoute);
app.use("/posts", postRoute);


app.listen(3000, console.log("Server is running at port 3000"))