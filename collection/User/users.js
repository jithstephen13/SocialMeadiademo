const { userModel } = require("../../model/User-Model")


const Users =async (req,res) => {
    try {
          const users=await userModel.find()
          res.status(200).send({users})

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

module.exports={ Users}