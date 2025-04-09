import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
};

export const getMessages = async(req, res)=>{
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId: myId, receiverId: userToChatId}, // senderId and receiverId are defined in Message Schema
                {senderId: userToChatId, receiverId: myId}, 
            ],
        });

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
}

export const sendMessage = async (req, res)=>{
    try {
        const {text, image} = req.body; // text and image are defined in Message Schema
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            //Upload base64(??????????) image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        })

        await newMessage.save(); //save it to database

        //realtime functionality of message
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage); //এটি ফ্রন্টএন্ড বা API ক্লায়েন্টকে নতুন সংরক্ষিত মেসেজের তথ্য JSON ফরম্যাটে পাঠায়।
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
}