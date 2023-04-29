const { userModel } = require("../../model/User-Model")


const Register = async(req,res) => {
    const {name , email , password, dob ,  bio}=req.body
    const alredy=await userModel.find({email})

    if(alredy.length<1){

        try {
            bcrypt.hash(password, 5, function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    res.send("something went wrong please try again")
                }
                else{
                    const user=new userModel({name,email,password:hash,  dob ,  bio})
               user.save()
               res.status(201).send({"mssg":"Signup succefully"})
                }
            });
        } catch (error) {
            
        }
    }
    else{
        res.status(400).send("Useris Already exist")
    }
 
}

module.exports={Register}
