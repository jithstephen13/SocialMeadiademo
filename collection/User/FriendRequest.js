const { userModel } = require("../../model/User-Model")


const FriendRequest = async(req,res) => {

    userid=req.body.user_id
    recivingid=req.body.frd_id

    const users=await userModel.findByIdAndUpdate({_id:recivingid},{friendRequests:userid})
    res.status(201).send()


 
}

module.exports={FriendRequest}