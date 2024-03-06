const { model } = require("mongoose");

const validateRegistration =(schema)=> async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status=400;
        const extradetails="Invalid Details";
        const message= err.errors[0].message.replace("String",err.errors[0].path);
        console.log(extradetails);
        const error = {
          status,
          extradetails,
          message,
          
        }
        console.log(error)
        next(error);

        // const message = err.errors[0].message.replace("String",err.errors[0].path);
        // res.status(400).json({msg:message});
    }
}

module.exports = validateRegistration;