const fetch= require("node-fetch")

module.exports={
    list: async (req,res)=>{
        fetch("http://localhost:3000/profesiones")
        .then(response => response.json())
        .then(profesiones => {
            return res.json(profesiones)
        })
    }
}