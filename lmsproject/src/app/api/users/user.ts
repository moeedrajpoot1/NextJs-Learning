import type{NextApiRequest,NextApiResponse} from "next"
import Db_connection from '../../lib/connection'
import User from "@/app/models/users";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await Db_connection(); // make a monogo db connection
    switch(req.method){
     case "GET":
        try {
            const data:any= await User.find({});
            return res.status(200).json(data)
        } catch (error:any) {
            return res.status(500).json(error.message)
        }
        break;
    case"POST":


    case "PUT":

    case "DELETE":

    }

}