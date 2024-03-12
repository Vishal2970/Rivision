const {z} = require("zod");

//object schema

const signupSchema = z.object({
    username : z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{msg:"Name atleast 3 characters"})
    .max(255,{msg:"Name not more than 255 characters"}),
    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email({msg:"Invalid Email"})
    .min(3,{msg:"Email atleast 3 characters"})
    .max(255,{msg:"Email not more than 255 characters"}),
    phone : z
    .string({required_error:"Name is required"})
    .trim()
    .min(10,{msg:"Name atleast 3 characters"})
    .max(20,{msg:"Name not more than 255 characters"}),
    password : z
    .string({required_error:"Name is required"})
    .min(7,{msg:"Name atleast 3 characters"})
    .max(1024,{msg:"Name not more than 255 characters"}),
});

// const signupLogin = z.object({
//     username : z
//     .string({required_error:"Name is required"})
//     .trim()
//     .min(3,{msg:"Name atleast 3 characters"})
//     .max(255,{msg:"Name not more than 255 characters"}),
//     password : z
//     .string({required_error:"Name is required"})
//     .min(7,{msg:"Name atleast 3 characters"})
//     .max(1024,{msg:"Name not more than 255 characters"}),
// });

module.exports = signupSchema;