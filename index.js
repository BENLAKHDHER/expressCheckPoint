/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";

const app = express();
app.set('view engine', 'ejs')
app.get('/', (req, res) => { res.render("home") })
// app.use('/api/users',userRoutes)
// app.use('/api/posts',postRoutes)
app.listen(5000, () => {
    console.log("server is running on port 5000");
});
