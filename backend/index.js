const connectToMongo =require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors(
  {
    origin:[""],
            methods:["POST","GET"],
            credentials:true
  }
))
app.use(express.json());
mongoose.connect('mongodb+srv://mangeshgonje12:Mangesh@01@cluster0.47o5wcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// available routes
app.get("/", (req, res) => {
  res.send("welcome to my server");
});
app.use('/api/auth',require('./routes/auth'))
app.use('/api/Notes',require('./routes/Notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
