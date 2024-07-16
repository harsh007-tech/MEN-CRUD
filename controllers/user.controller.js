const User = require("../models/user.model")
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const fetchAllUsers = async(req,res)=>
    {
        try
        {
            const users = await User.find({});
            res.status(200).json(users);
        }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    };
const fetchUserById = async(req,res)=>
        {
            try
            {
                const { id } = req.params;
                const user = await User.findById(id);
                res.status(200).json(user);
            }
            catch(error)
            {
                res.status(500).json({messge:error.message});
            }
        };
const registerUser = async(req,res)=>
    {   try
        {
        const user = await User.create(req.body);
        
        if(user.age<0){return res.status(400).json({message:"Age must be greater than 0"});}
        res.status(200).json(user);
        }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    }
const updateUserById = async(req,res)=>
    {
        try
        {
            const {id} = req.params;
            if(!ObjectId.isValid(id)){return res.status(404).json({message:"User not found"})};
            const user = await User.findByIdAndUpdate(id,req.body);
            updatedUser = await User.findById(id);
            res.status(200).json(updatedUser);
        }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    };
const deleteUserById = async(req,res)=>
    {
        try
        {
            const {id} = req.params;
            if(!ObjectId.isValid(id)){return res.status(404).json({message:"User not found"})};
            const user = await User.findByIdAndDelete(id,req.body);
            if(!user){return res.status(404).json({message:"User not found"})};
            res.status(200).json({message:"User deleted successfully."});
        }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    };
module.exports  = {fetchAllUsers,fetchUserById,registerUser,updateUserById,deleteUserById}