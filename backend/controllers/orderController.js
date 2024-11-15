import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

const placeOrder = async(req,res) =>{
    try {
        const {userId,items,amount,address} = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"cod",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const allOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.json({ success: false, message: "User ID is required" });
        }
        
        const orders = await orderModel.find({ userId }); // Assuming OrderModel is the correct model
        if (!orders.length) {
            return res.json({ success: true, message: "No orders found", orders: [] });
        }
        res.json({ success: true, orders });
    } catch (error) {
        console.log("Error fetching orders:", error); // Log the full error
        res.json({ success: false, message: error.message });
    }
};


const updateStatus = async(req,res) =>{
    try {
        const {orderId,status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error)
        res.json({success:true,message:error.message})
        
    }
}

export { allOrders, placeOrder, updateStatus, userOrders }
