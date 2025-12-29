import { Router } from "express"
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY)


export const login = Router()

login.post("/", async (req, res) => {
    if (!(req.body.username && req.body.password)) {
        res.status(400).send("Missing fields")
        return
    }
    const selectRes = await supabase.from("users").select("*").eq("username", req.body.username).eq("password", req.body.password)
    if (selectRes.data[0] != null) {
        res.status(200).json("Login successful")
        return
    }
    res.status(400).send("Wrong username or password")
})

export const products = Router()

products.get("/", async (req, res) => {
    let res_f = await fetch("http://localhost:3000/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "username": req.headers.username,
            "password": req.headers.password
        })
    })
    if (res_f.status !== 200) {
        res.status(400).send("Unauthorized")
        return
    }
    const selectRes = await supabase.from("products").select("*")
    res.status(200).json(selectRes.data)

})


