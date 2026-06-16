import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter  from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;


//middleware
app.use(express.json());//for parsing json
app.use(cors());//access backend to frontend

//db connection
connectDb();

//API ENDPOINTS
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{ // to get data from server
    res.send("API IS WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})



