const {app}=require('./app');
const mongoose=require("mongoose");


const port =process.env.PORT||3000;
app.listen(port,async()=>{
    await mongoose.connect(
        "mongodb+srv://marinabeder98:ueKBLSSPIAiWcTGJ@cluster0.pn3xder.mongodb.net/test");
        console.log(`listening on port ${port}...`)
});
