const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: [{ type: ObjectId, ref: 'Post' }],
    friends: [{ type: ObjectId, ref: 'User' }],
    friendRequests: [{ type: ObjectId, ref: 'User' }]
})


const userModel=mongoose.model("User",userschema)

module.exports={userModel}