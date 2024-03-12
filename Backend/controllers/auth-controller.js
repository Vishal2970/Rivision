const User=require("../models/user-models");
const bcrypt = require('bcrypt');

const home = async (req,res) =>{
  try {
    res.status(200).send("Welcome to vishal's website by controller folder");
  } catch (error) {
    console.log(error);
  }  
};



const register = async (req,res) =>{
    try {
      // console.log(req.body);
      const {username,email,phone,password}=req.body;
      const userExist= await User.findOne({email:email});
      if(userExist){        
        return res.status(400).json({msg:"email already exist"});
      }

      // const saltRound=10;
      // const hash_password=await bcrypt.hash(password,saltRound);

      const userCreated=await User.create({username,email,phone,password});
      res.status(201).json({
        msg:"Registration Successfull",
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString(),
      });
    } catch (error) {
      res.status(400).send({msg:"page not found"})
    }  
  };


  const login = async (req,res) =>{
    try {
      const {email,password}=req.body;
      const userExist= await User.findOne({email});
      if(!userExist){
        return res.status(400).json({msg:"Invalid Credintial"});
      }

      // const user = await bcrypt.compare(password,userExist.password);
      const user = await userExist.passwordMatch(password);

      if(user){
        res.status(200).json({
        msg:"Login Successfull",
        token:await userExist.generateToken(),
        userId:userExist._id.toString(),
        });
      }else{
        res.status(401).json({msg:"Invalid Email or Password"});
      }
      
    } catch (error) {
      res.status(500).send({msg:"Internal server error"})
    }  
  };
  
  

module.exports={home,register,login};