import express from "express"
import dotenv from "dotenv"
import {json} from "express"
import routes from "./routes/index.js"

dotenv.config();
const app = express();
app.use(json());
app.use(routes)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server funcionando")
})