import { connect } from "@/app/lib/dbconnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request, {params}) {
    const {id} = await params


    if(id.length != 24){
        return Response.json({
            status: 400,
            message: "Send Correct Id"
        })
    }
    

    const query = {_id:new ObjectId(id)}

    const result = await feedbackCollection.findOne(query)

    return Response.json(result)
}



export async function DELETE(request, {params}) {
    const {id} = await params


    if(id.length != 24){
        return Response.json({
            status: 400,
            message: "Send Correct Id"
        })
    }
    

    const query = {_id:new ObjectId(id)}

    const result = await feedbackCollection.deleteOne(query)

    return Response.json(result)
}




export async function PATCH(request, {params}) {
    const {id} = await params
    const {message} = await request.json()


    if(id.length != 24){
        return Response.json({
            status: 400,
            message: "Send Correct Id"
        })
    }

    if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please Send a Message",
    });
  }
    

    const query = {_id:new ObjectId(id)}

    const newMessage = {
        $set: {
            message
        }
    }

    const result = await feedbackCollection.updateOne(query, newMessage)

    return Response.json(result)
}