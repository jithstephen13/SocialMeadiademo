const express=require("express")
const { Register } = require("../collection/User/register")
const { Users } = require("../collection/User/users")
const { GetFriend } = require("../collection/User/GetFriend")

const Allroutes=express.Router()

// user related 

Allroutes.post("/api/register",Register)

Allroutes.get("/api/users",Users)

Allroutes.get("/api/users/:id/friends",GetFriend)

Allroutes.post("/api/users/:id/friends",)














module.exports={Allroutes}