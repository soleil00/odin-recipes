const express=require("express")
const bodyParser=require("body-parser")
const request=require("request")

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public")) 

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html")
})

app.post("/",(req,res)=>{
    const email=req.body.email;
    const fullName=req.body.fullName;
    // res.write(`Names:${fullName}`);
    // res.write(`Email: ${email}`);
    
    if(res.statusCode===200) {
        res.sendFile(__dirname + "/success.html")
    } else res.send("sorry try agin later")
})


app.post("/success",(req,res)=>{
res.sendFile(__dirname + "/signup.html")
})











app.listen(3000,()=>{
    console.log("server is running on port 3000")
})