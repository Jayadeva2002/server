const express = require('express');
const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})
const products = [
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"real me"
    },
    {
        id:3,
        name:"samsung"
    }
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    console.log(req.query.status)
    console.log(req.params.id)
    console.log(req.query.age)
    console.log(req.query.ese)

    const newData = products.filter(item => item.id.toString() === req.params.id);
    res.json(newData)
})
app.post('/items/:id',(req,res)=>{
    console.log(req.body)
    console.log(req.query.status)
    console.log(req.params.id)
    console.log(req.query.age)
    console.log(req.query.ese)
    return res.json(req.body)
})
app.listen(5000,()=> console.log("server is run 5000"));
