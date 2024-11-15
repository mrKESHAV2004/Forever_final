import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongoDb.js';
import { addToCart, getUserCart, updateCart } from './controllers/cartController.js';
import { allOrders, placeOrder, updateStatus, userOrders } from './controllers/orderController.js';
import { addProduct, listProducts, removeProduct, singleProduct } from './controllers/productController.js';
import adminAuth from './middleware/adminAuth.js';
import authUser from './middleware/auth.js';
import upload from './middleware/multer.js';
import userRouter from './routes/userRoutes.js';


const app  = express();
const port  = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter);

app.use('/api/product/list', listProducts);
app.use('/api/product/single',singleProduct);
app.use('/api/product/remove',adminAuth,removeProduct);
app.use('/api/product/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);

app.use('/api/cart/get',authUser,getUserCart)
app.use('/api/cart/add',authUser,addToCart)
app.use('/api/cart/update',authUser,updateCart)

app.use('/api/order/list',allOrders)
app.use('/api/order/status',updateStatus)

app.use('/api/order/place',authUser,placeOrder)
    
app.use('/api/order/userorders',authUser,userOrders)


app.get('/',(req,res)=>{
    res.send("api working")
})
app.listen(port,()=>console.log('server has started:'+port))