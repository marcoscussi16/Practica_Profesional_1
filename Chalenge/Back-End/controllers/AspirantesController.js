db = require ("../database/models")
const aspirantesController ={
    aspirantes:(req,res)=>{
        db.Aspirantes.findAll({
            include: [{association :"profesiones"}]
        })
        .then((aspirantes) => {
        return res.status(200).json(aspirantes)
    })
    }
}
module.exports = aspirantesController;