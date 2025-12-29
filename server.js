import express from "express"
import { login ,products} from "./routers/routers.js"

const app = express()
const port = 3000
app.use(express.json())
app.use("/login",login)
app.use("/products",products)
app.listen(port,(req,res)=>{
    console.log("server run...");
})