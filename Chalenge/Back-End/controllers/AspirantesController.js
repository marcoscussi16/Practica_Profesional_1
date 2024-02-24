db = require ("../database/models")
const aspirantesController ={
    aspirantes:(req,res)=>{
        db.Aspirantes.findAll()
        .then((aspirantes) => {
        return res.status(200).json({
            total: aspirantes.length,
            data: aspirantes,
            status: 200
        })
    })
    }
}
module.exports = aspirantesController;