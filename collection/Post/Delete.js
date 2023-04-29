const { PostModel } = require("../../model/Posst-Model");

const DeletePost=async(request,response)=>{
    let id=request.params.id
   
    try {
        await PostModel.findByIdAndDelete({_id:id})
        response.send({ "Message": `post of id: ${id} is successfully deleted ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the post data", "Error": error.message });
    }

}