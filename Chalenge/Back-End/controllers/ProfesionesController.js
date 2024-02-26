db = require ("../database/models")
const profesionesController ={
    profesiones:(req,res)=>{
        db.Profesiones.findAll()
            .then((profesiones) => {
                return res.status(200).json({profesiones})
            }) 
        
    }
}
module.exports = profesionesController;