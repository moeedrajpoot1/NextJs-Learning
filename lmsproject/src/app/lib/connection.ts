import mongoose, { connection } from 'mongoose'


const Db_connection= async()=>{
try {
  await  mongoose.connect(process.env.MONGODB_CLOUD!)
  console.log(`database connected  ${connection.host}`)
} catch (error) {
    console.log(`DB Connection Failed`,error)
}
}


export default Db_connection