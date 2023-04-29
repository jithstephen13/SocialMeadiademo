const mongoose=require("mongoose")

const Postschema=mongoose.Schema({

    user: { type: ObjectId, ref: 'User' },
    text: String,
    image: String,
    createdAt: Date,
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [{
      user: { type: ObjectId, ref: 'User' },
      text: String,
      createdAt: Date
    }]

})

const PostModel=mongoose.Model("Post",Postschema)

module.exports={PostModel}

