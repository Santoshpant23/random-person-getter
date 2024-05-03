import express from 'express'

const port  = 3005;


const app: express.Application = express();


type User = {
    name: String,
    description: String
}

const data = [{
    name: "Santosh",
    description: "A Student"
}, {
    name: "Sun Lee",
    description: "A Master"
},
{
    name: "Leahy",
    description: "A Teacher"
}
]


 

    app.listen(port, ()=>{
        console.log("deployed");
        
    })


    app.get('/getdata', (req, res)=>{
        
        const random:number = Math.floor(Math.random()*3);
        const toreturn: User = data[random];
        res.json(toreturn);
    })



