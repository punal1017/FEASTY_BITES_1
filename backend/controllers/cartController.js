// import userModel from "../models/userModel.js"

// //ADD ITEMS TO USER CART
// const addToCart = async(req,res) => {
//     try{
//         let userData = await userModel.findById(req.body.userId) ;
//         let cartData = await userData.cartData;
//         if(!cartData[req.body.itemId]){
//             cartData[req.body.itemId] = 1;
//         }
//         else{
//             cartData[req.body.itemId] +=1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//         res.json({success:true,message:"Added to Cart"})
//     }catch(error){
//         console.log(error)
//         res.json({success:false,message:"Error"});
//     }
// }

// //REMOVE ITEMS FROM USER CART
// const removeFromCart = async(req,res) =>{
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         if(cartData[req.body.itemId]>0){
//             cartData[req.body.itemId] -= 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData})
//         res.json({success:true,message:"Removed from cart"})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"});
//     }
// }

// //FETCH USER CART DATA
// const getCart = async(req,res) =>{
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})
//     } catch (error) {
//         console.log(error)
//         res.json({success:true,message:"Error"})
//     }
// }

// export {addToCart,removeFromCart,getCart}


import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) return res.status(404).json({ success: false });

    const cart = user.cartData ?? {};
    const key = req.body.itemId;

    cart[key] = Number.isInteger(cart[key]) ? cart[key] + 1 : 1;

    user.cartData = cart;
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) return res.status(404).json({ success: false });

    const cart = user.cartData ?? {};
    const key = req.body.itemId;

    if (cart[key] && cart[key] > 0) {
      cart[key] = cart[key] - 1;
    }

    user.cartData = cart;
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
};

const getCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) return res.status(404).json({ success: false });

    res.json({ success: true, cartData: user.cartData ?? {} });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
};

export { addToCart, removeFromCart, getCart };