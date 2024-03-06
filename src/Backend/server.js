const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");

//below this is middleware 
const corsOptions ={
  origin:"http://localhost:3000",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port:${PORT}`);
  });
});