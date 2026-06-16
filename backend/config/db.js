import mongoose from "mongoose"

export const connectDb = async () => {
    // await mongoose.connect('mongodb+srv://punal1017:found1017@cluster0.mpevv.mongodb.net/food-del',{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // })



//     await mongoose.connect('mongodb://localhost:27017/ORDEROFFOOD',{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(()=>{
//         console.log("db connected");
//     })
//     .catch((err)=>{
//         console.log(err);
//         console.log("db not connected")
//     })
// }



    await mongoose.connect('mongodb+srv://punaldhiman1017_db_user:RcG2UdzAS1WIBnOK@cluster0.kbktx6v.mongodb.net/?appName=Cluster0',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
        console.log("db not connected")
    })
}

