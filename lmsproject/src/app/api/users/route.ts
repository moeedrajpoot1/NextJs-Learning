import mongoose from 'mongoose'


const Db_connection= async()=>{
try {
  await  mongoose.connect(process.env.MONGODB_CLOUD)
  console.log('database connected')
} catch (error) {
    console.log(`DB Connection Failed`,error)
}
}


export default Db_connection