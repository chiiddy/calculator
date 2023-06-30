const express = require("express");
const app = express();

// this is a middleware
app.use(express.json())

const result = []

app.get("/getAll", ((request, response) => {
    response.json({result})
}))

app.post("/addition", function (req, res){
    const {value1, value2} = req.body;
    const answer = value1 + value2
   const message = `the sum of ${value1} and ${value2} is ${answer}`
   result.push(message)
   res.json({message})
})


app.post("/substraction", function (req, res){
    const {value1, value2} = req.body;
    const answer = value1 - value2
    res.json({"message": `the sum of ${value1} and ${value2} is ${answer}`})
})

app.post("/division", function (req, res){
    const {value1, value2} = req.body;
    const answer = value1 / value2
    res.json({"message": `the sum of ${value1} and ${value2} is ${answer}`})
})

app.post("/multiplication", function (req, res){
    const {value1, value2} = req.body;
    const answer = value1 * value2
    res.json({"message": `the sum of ${value1} and ${value2} is ${answer}`})
})

app.listen(5000, function(){
    console.log("server is running on port 5000")
});


