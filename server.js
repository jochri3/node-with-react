const express = require('express');
const cors = require('cors');
const path=require("path");
const {postsRouter}=require("./routes");

require("./config/db")


const app = express();

app.use(express.json());
app.use(cors());


//Routes
app.use("/api/posts",postsRouter);


if(process.env.NODE_ENV==="production"){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build',"index.html"));
  })
}


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
