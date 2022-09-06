const express = require('express');
const app = express();
const morgan = require('morgan');
const productRouter = require("./routes/productRoutes");

//middleware
app.use(express.json());
//app.use(morgan("dev"));
//mi propio middleware
/* app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
}); */

//routes
app.use("/api/v1/products",productRouter);  

module.exports = app;

