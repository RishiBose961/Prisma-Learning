import "dotenv/config.js"
import express from "express";

const app = express();

const port = process.env.port|| 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

import routes from './routes/index.js'

app.use(routes)

app.listen(port,()=>console.log(`listening on ${port}`));
