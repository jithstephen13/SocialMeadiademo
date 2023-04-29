const { userModel } = require("../../model/User-Model")


const GetFriend =async (req,res) => {

    const id=req.params.id

   

    try {
         const users=await userModel.findById({_id:id})
    

    res.status(201).send({friends:users.friends})
    } catch (error) {
        
    }



 
}

module.exports= {GetFriend}