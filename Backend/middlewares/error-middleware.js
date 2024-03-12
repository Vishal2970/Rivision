const errorMiddleware = (err,req,res,next) =>{
    const extrDetails=err.extrDetails || "Not found";
    const status =err.status ||500;
    const message = err.message||"Backend ERROR";
    console.log("From error "+extrDetails)
    return res.status(status).json({message, extrDetails});
};

module.exports = errorMiddleware;