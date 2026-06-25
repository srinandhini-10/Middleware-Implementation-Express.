 const express = require ('express');
const app = express();
const PORT = 3000;
const logger =require("./Routes/logger");
const errorHandler =require('./Routes/errorHandler');
app.use(express.json());
app.use(logger);
app.get('/data',(req,res)=>{
    res.json({ info:'Here is your data'});
});
app.get('/error',(req,res,next)=>{
    const err = new Error('Something went wrong!');
    err.status = 400;
    next(err);
});
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});