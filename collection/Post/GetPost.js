const { PostModel } = require("../../model/Posst-Model")


const GetPost = async() => {
    const id=req.body.id
    const users=await PostModel.find()



 
}

module.exports={ GetPost}