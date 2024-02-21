db = require ("../database/models")
const aspirantesController ={
    aspirantes:(req,res)=>{
        db.Aspirantes.findAll()
            .then((aspirantes) => {
                res.send(aspirantes)
            }) 
        
    }
}
module.exports = aspirantesController;